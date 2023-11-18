import { IStrategy } from "./IStrategy";


export class StrategySoma implements IStrategy {
    constructor () {};

    execute (num1: number, num2: number): number {
        return num1 + num2
    }
}