import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo {
    
    constructor(modelo: string, 
        marca: string, 
        cor: string, 
        numeroRodas: number, 
        protected _cilindrada: number) {
        super(modelo, marca, cor, numeroRodas);   
    }

    clone(): this {
        const newObj = Object.create(this);
        return newObj;
    }

    getCilindrada (): number {
        return this._cilindrada;
    }

    setCilindrada (cilindrada: number): void {
        this._cilindrada = cilindrada;  
    }

    represent(): string {
        return `Moto - Modelo: ${this._modelo}, Marca: ${this._marca}, Cor: ${this._cor}, Rodas: ${this._numeroRodas}, Cilindradas: ${this._cilindrada}`;
    }
}