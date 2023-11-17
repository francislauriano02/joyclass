export interface Sanduinche {
    getDescricao (): string;
    getPreco (): number;
    toString (): string;
}


export class SanduinchePadrao implements Sanduinche {

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


export class PepperoniDecorator implements Sanduinche {

    constructor (private _sanduiche: Sanduinche) {} 

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


export class QueijoMussarelaRadaloDecorator implements Sanduinche {

    constructor (private _sanduiche: Sanduinche) {}

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

const sanduicheDeFrango = new SanduinchePadrao('Frango Assado', 4.50);
console.log(sanduicheDeFrango.toString());

const sanduicheDeCarne = new SanduinchePadrao('Carne', 7.49);
console.log(sanduicheDeCarne.toString());

const sanduicheDeFrangoComQueijo = new QueijoMussarelaRadaloDecorator (sanduicheDeFrango);
console.log(sanduicheDeFrangoComQueijo.toString());

const sanduicheDeFrangoComQueijoEPepperoni = new PepperoniDecorator (sanduicheDeFrangoComQueijo);
console.log(sanduicheDeFrangoComQueijoEPepperoni.toString());







