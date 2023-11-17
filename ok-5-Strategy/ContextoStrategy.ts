import { IStrategy } from "./IStrategy";


export class ContextoStrategy {

    constructor (private strategy: IStrategy) {};

    setStrategy (strategy: IStrategy): void {
        this.strategy = strategy;
    }

    executeStrategy (num1: number, num2: number): number {
        return this.strategy.execute(num1, num2);
    }
}