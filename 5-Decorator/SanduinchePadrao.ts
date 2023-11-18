import { ISanduinche } from "./ISanduinche"

export class SanduinchePadrao implements ISanduinche {

    constructor (private _descricao: string, private _precoBase: number) {}

    getDescricao(): string {
        return this._descricao
    }

    getPreco(): number {
        return this._precoBase
    }

    toString(): string {
        return `Sanduinche: ${this._descricao}\nPreço: R$${this._precoBase}\n`

    }

}
