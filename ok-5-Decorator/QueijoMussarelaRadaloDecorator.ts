import { ISanduinche } from "./ISanduinche"

export class QueijoMussarelaRadaloDecorator implements ISanduinche {

    constructor (private _sanduiche: ISanduinche) {}

    getDescricao(): string {
        return this._sanduiche.getDescricao () + ' + Queijo Mussarela Ralado'
    }

    getPreco(): number {
        return this._sanduiche.getPreco() + 2
    }

    toString(): string {
        return `Sanduinche: ${this._sanduiche.getDescricao () + ' + Queijo Mussarela Ralado'}\nPreço: R$${this._sanduiche.getPreco() + 2}\n`

    }
}