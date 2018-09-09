import firebase from 'firebase';
import { firebaseConfig } from '../firebase-config';
import { Log } from '../models/log.model';
import { getCurrentDateTime } from './app.helper';


export function initializeFirebase(): void {
    if (firebase.apps.length <= 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export function checkIfExist(dbReference: string): Promise<boolean> {
    return firebase.database().ref(dbReference).once('value')
        .then((snapshot) => {
            return snapshot.exists();
        })
        .catch((err) => {
            logEvent('Promise Error', err);
            return false;
        });
}

export function logEvent(title: string, details: string): void {
    const log = new Log();
    log.title = title;
    log.details = details;
    log.time = getCurrentDateTime();
    log.deviceId = 'devb';
    firebase.database().ref('Logs').push(log);
}
