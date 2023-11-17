import { IStrategy } from "./IStrategy"

export class StrategyMultiplicacao implements IStrategy {
    constructor () {};

    execute (num1: number, num2: number): number {
        return num1 * num2
    }
}