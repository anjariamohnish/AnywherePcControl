import { DeviceStatus } from "../enums/devicestatus.enum";
import { DeviceInfo } from "./deviceInfo.model";
import { ControlDevice } from "./controldevice.model";

export class Device {
    ControlDevice!: ControlDevice;
    DeviceInfo!: DeviceInfo;
    DeviceName!: string;
    DeviceStatus!: DeviceStatus;
    LastOnline!: string;
    QrCode!: string;
    SecurityPin!: string;
}