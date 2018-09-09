import { DeviceStatus } from "../enums/devicestatus.enum";
import { DeviceInfo } from "./deviceInfo.model";

export class Device {
    DeviceInfo: DeviceInfo | undefined;
    DeviceName: string | undefined;
    DeviceStatus: DeviceStatus | undefined;
    LastOnline: string | undefined;
    QrCode: string | undefined;
    SecurityPin: string | undefined;
}