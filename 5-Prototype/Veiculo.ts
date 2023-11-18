import { IPrototype } from "./IPrototype";

export abstract class Veiculo implements IPrototype {
   
    constructor(protected _modelo: string, 
        protected _marca: string, 
        protected _cor: string, 
        protected _numeroRodas: number) { };

   
    abstract represent(): string;
    abstract clone (): this;

    getModelo (): string {
        return this._modelo;
    }

    getMarca (): string {
        return this._marca;
    }

    getCor (): string {
        return this._cor;
    }

    getNumeroRodas (): number {
        return this._numeroRodas;
    }

    setModelo (modelo: string): void {
        this._modelo = modelo;
    }

    setMarca (marca: string): void {
        this._marca = marca;
    }

    setCor (cor: string): void {
        this._cor = cor;
    }

    setNumeroRodas (numeroRodas: number): void {
       this._numeroRodas = numeroRodas;
    }

}