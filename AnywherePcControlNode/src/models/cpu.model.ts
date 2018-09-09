export class CPU {
    manufacturer: string | undefined;
    brand: string | undefined;
    vendor: string | undefined;
    family: string | undefined;
    model: string | undefined;
    stepping: string | undefined;
    revision: string | undefined;
    voltage: string | undefined;
    speed: string | undefined;
    speedmin: string | undefined;
    speedmax: string | undefined;
    cores: number | undefined;
    cache: Array<any> | undefined;
}