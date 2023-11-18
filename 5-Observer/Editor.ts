import { IObserver } from "./IObserver";

export class Editor implements IObserver {
    update(): void {
        console.log("Nova linha no Editor!");
    }
}
