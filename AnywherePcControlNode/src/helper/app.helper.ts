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