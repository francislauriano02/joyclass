import { IComputador } from "./IComputador";

export class Server implements IComputador {
    constructor (private _ram: number, private _hdd: number, private _cpu: number, private _type: string) {
        this._type = 'Server';
    }

    getRam(): number {
        return this._ram
    }

    getHdd(): number {
        return this._hdd
    }

    getCpu(): number {
        return this._cpu
    }

    getType(): string {
        return this._type
    }

    toString(): string {
        return `COMPUTADOR - SERVER\nRAM: ${this._ram} GB | HD: ${this._hdd} GB | CPU: ${this._cpu} GHz | TIPO: ${this._type}\n`
    }       

}
