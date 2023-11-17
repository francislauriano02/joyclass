// aplicar padrão Factory Method:  
// produtos devem implementar uma interface comum;
// cliente deve utilizar apenas a fabrica para criar instancias do tipo interfaces;
// todo computador deve ter, com getters, os atributos: ram, hdd, cpu e type;
// há dois tipos de computadores: pc e server;
// ram e hd devem estar em GB;
// cpu deve estar em GHz;
// atraves do tipo informado, a fabrica decide qual tipo de computador irá instanciar;
// quando o metodo .toString() for aplicado a um computador, ele deve imprimir seus atributos;

export interface IComputador {
    getRam (): number;
    getHdd (): number;
    getCpu (): number;
    getType (): string;
    toString (): string;
}

export class Pc implements IComputador {
    constructor(private _ram: number, private _hdd: number, private _cpu: number, private _type: string) { 
        this._type = 'PC'; 
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
        return `COMPUTADOR - PC\nRAM: ${this._ram} GB | HD: ${this._hdd} GB | CPU: ${this._cpu} GHz | TIPO: ${this._type}\n`
    }
}

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

class FactoryComputador {
    static createComputador (type: 'PC' | 'Server', ram: number, hdd: number, cpu: number): IComputador {
        if(type === 'PC') {
            return new Pc (ram, hdd, cpu, type);
        }else if (type === 'Server') {
            return new Server (ram, hdd, cpu, type);
        } else {
            throw new Error (`Tipo de computador inválido!`)  
        }
    }
}



const pc = FactoryComputador.createComputador('PC', 10, 9, 2);

console.log(pc.toString());

const server = FactoryComputador.createComputador('Server', 8, 4, 3);

console.log(server.toString());


