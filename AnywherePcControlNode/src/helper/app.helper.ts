import { Log } from "../models";
import firebase from "firebase";

export function getCurrentDateTime(date: boolean = true, time: boolean = true) {
    const currentDateTime = new Date();

    const currentTime = currentDateTime.getHours() + ":"
        + currentDateTime.getMinutes() + ":"
        + currentDateTime.getSeconds();

    const currentDate = currentDateTime.getDate() + "/"
        + (currentDateTime.getMonth() + 1) + "/"
        + currentDateTime.getFullYear();

    if (date && time) {
        return currentDate + ' @ ' + currentTime;
    } else if (date && !time) {
        return currentDate;
    } else if (!date && time) {
        return currentTime;
    }
}


export function logEvent(title: string, details: string): void {
    const log = new Log();
    log.title = title;
    log.details = details;
    log.time = getCurrentDateTime();
    log.deviceId = 'devb';
    firebase.database().ref('Logs').push(log);
}
