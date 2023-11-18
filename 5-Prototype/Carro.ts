import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
   
  
    constructor (modelo: string, 
        marca: string, 
        cor: string, 
        numeroRodas: number, 
        protected _numeroDePortas: number) {
        super(modelo, marca, cor, numeroRodas);  
    }

    clone(): this {
        const newObj = Object.create(this);
        return newObj;
    }


    getNumeroDePortas (): number {
        return this._numeroDePortas;
    }

    setNumeroDePortas(numeroDePortas: number): void {
        this._numeroDePortas = numeroDePortas;  
    }


    represent(): string {
        return `Carro - Modelo: ${this._modelo}, Marca: ${this._marca}, Cor: ${this._cor}, Rodas: ${this._numeroRodas}, Portas: ${this._numeroDePortas}`;
    }
}
