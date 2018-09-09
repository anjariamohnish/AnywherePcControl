import { Ethernet } from "./ethernet.model";
import { Battery } from "./battery.model";
import { SystemInfo } from "./systeminfo.model";
import { UserInfo } from "firebase";
import { OsInfo } from "./osinfo.model";
import { CPU } from "./cpu.model";
import { GraphicsInfo } from "./graphicsinfo.model";

export class DeviceInfo {
    SystemInfo: SystemInfo | undefined;
    EthernetInfo: Array<Ethernet> | undefined;
    BatteryInfo: Battery | undefined;
    UserInfo: Array<UserInfo> | undefined;
    OsInfo: OsInfo | undefined;
    CpuInfo: CPU | undefined;
    GraphicsInfo: GraphicsInfo | undefined;
}