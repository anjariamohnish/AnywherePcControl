import firebase from 'firebase';
import sysInfo, { Systeminformation } from 'systeminformation';
import Promise from 'promise';
import { firebaseConfig } from './firebase-config';
import { DEVICES_NODE } from './constants/constant';
import { initializeFirebase, checkIfExist } from './helper/firebase.helper';
import { logEvent } from './helper/app.helper';
import { Device, DeviceInfo } from './models';
import { DeviceStatus } from './enums/devicestatus.enum';
import { ControlDevice } from './models/controldevice.model';

function startUp() {

    initializeFirebase();
    let deviceId;
    sysInfo.system().then(sysinfo => deviceId = sysinfo.uuid);
    checkIfExist(DEVICES_NODE + '/' + deviceId)
        .then((exist) => {
            if (exist) {

            } else {
                registerMachine()
                    .then(() => {
                        // registration success
                        
                    }).catch((err) => {
                        logEvent('Promise Error', err);
                    });
            }
        })
        .catch((err) => {
            logEvent('Promise Error', err);
        });



}

function registerMachine(): Promise<any> {
    return new Promise((resolve, rejects) => {
        let deviceInfo = new DeviceInfo();
        Promise.all([ // promises
            sysInfo.system().then(data => deviceInfo.SystemInfo = data),
            sysInfo.cpu().then(data => deviceInfo.CpuInfo = data),
            sysInfo.battery().then(data => data.hasbatter ? deviceInfo.BatteryInfo = data : null),
            sysInfo.graphics().then(data => deviceInfo.GraphicsInfo = data),
            sysInfo.osInfo().then(data => deviceInfo.OsInfo = data),
            sysInfo.users().then(data => deviceInfo.UserInfo = data),
            sysInfo.networkInterfaces().then(data => deviceInfo.EthernetInfo = data)])
            .then(() => {
                let device = new Device();
                device.DeviceName = deviceInfo.OsInfo.hostname;
                device.SecurityPin = "";
                device.QrCode = "";
                device.LastOnline = "";
                device.DeviceStatus = DeviceStatus.ON;
                device.ControlDevice = new ControlDevice();
                device.DeviceInfo = deviceInfo;
                firebase.database().ref(DEVICES_NODE).child(deviceInfo.SystemInfo.uuid).set(device, (err: any) => {
                    if (err) {
                        rejects(new Error(err));
                        logEvent('Database Set Error', err);
                    } else {
                        resolve();
                    }
                })
            }).catch((err) => {
                rejects(new Error(err));
                logEvent('Promises Error', err);
            });
    })
}


startUp();
