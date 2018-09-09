import { Controller } from "./controller.model";
import { Display } from "./display.model";

export class GraphicsInfo {
    controllers: Array<Controller> | undefined;
    displays: Array<Display> | undefined;
}