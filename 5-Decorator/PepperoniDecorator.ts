import { ISanduinche } from "./ISanduinche";

export class PepperoniDecorator implements ISanduinche {

    constructor (private _sanduiche: ISanduinche) {} 

    getDescricao(): string {
        return this._sanduiche.getDescricao() + ' + Pepperoni'
    }

    getPreco(): number {
        return this._sanduiche.getPreco() + 0.99;
    }

    toString(): string {
        return `Sanduinche: ${this._sanduiche.getDescricao() + ' + Pepperoni'}\nPreço: R$${this._sanduiche.getPreco() + 0.99}\n`

    }
}