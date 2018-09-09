import firebase from 'firebase';
import sysInfo from 'systeminformation';
import { firebaseConfig } from './firebase-config';
import { DEVICES_NODE } from './constants/constant';
import { initializeFirebase, checkIfExist } from './helper/firebase.helper';

function startUp() {
    // get

    initializeFirebase();

    checkIfExist(DEVICES_NODE + '/devid')
        .then((exist) => {
            console.log(exist);
        })
        .catch((err) => {

        })


    // sysInfo.system().then(data => console.log(data));
    // sysInfo.cpu().then(data => console.log(data));
    // sysInfo.battery().then(data => console.log(data));
    // sysInfo.graphics().then(data => console.log(data));
    // sysInfo.osInfo().then(data => console.log(data));
    // sysInfo.users().then(data => console.log(data));
    // sysInfo.networkInterfaces().then(data => console.log(data));


}


startUp();
