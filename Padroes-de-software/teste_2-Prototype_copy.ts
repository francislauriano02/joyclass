
export interface IPrototype {
    clone (): IPrototype;
}


export abstract class Veiculo implements IPrototype {
   

    constructor(protected _modelo: string, protected _marca: string, protected _cor: string, protected _numeroRodas: number) { };

    clone (): this {
        const newObj = Object.create(this);
        return newObj;
    }

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

export class Carro extends Veiculo {
    // private _numeroDePortas: number;
  
    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, private _numeroDePortas: number) {
        super(modelo, marca, cor, numeroRodas);
        
        // this._numeroDePortas = numeroDePortas;
    }

    getNumeroDePortas (): number {
        return this._numeroDePortas;
    }

    setNumeroDePortas(numeroDePortas: number): void {
        this._numeroDePortas = numeroDePortas;  
    }
}

export class Moto extends Veiculo {
    // private _cilindrada: number;

    constructor(modelo: string, marca: string, cor: string, numeroRodas: number, private _cilindrada: number) {
        super(modelo, marca, cor, numeroRodas);

        // this._cilindrada = cilindrada;
    }

    getCilindrada (): number {
        return this._cilindrada;
    }

    setCilindrada (cilindrada: number): void {
        this._cilindrada = cilindrada;  
    }
}


class Aplicacao {
    static criarCarros(): Carro[] {
        const carroPrototype = new Carro("Carro Protótipo", "Marca Protótipo", "Preto", 4, 4);

        const carro: Carro[] = [];

            const carroClone1 = carroPrototype.clone();
            carroClone1.setModelo(`modelo Carro Clone 1`);
            carroClone1.setMarca(`Marca Carro Clone 1`);
            carroClone1.setCor('Cor Carro Clone 1');
            carroClone1.setNumeroRodas(4);
            carroClone1.setNumeroDePortas(2);

            const carroClone2 = carroPrototype.clone();
            carroClone2.setModelo(`Modelo Carro Clone 2`);
            carroClone2.setMarca(`Marca Carro Clone 2`);
            carroClone2.setCor('Cor Carro Clone 2');
            carroClone2.setNumeroRodas(4);
            carroClone2.setNumeroDePortas(4);

            carro.push(carroPrototype, carroClone1, carroClone2);

        return carro;
    }


    static criarMotos(): Moto[] {
        const motoPrototype = new Moto("Moto Protótipo", "Marca Protótipo", "Vermelho", 2, 250);

        const moto: Moto[] = [];

            const motoClone1 = motoPrototype.clone();
            motoClone1.setModelo(`Molelo Moto Clone 1`);
            motoClone1.setMarca(`Marca Moto  1`);
            motoClone1.setCor('Cor Moto Clone 1');
            motoClone1.setNumeroRodas(2);
            motoClone1.setCilindrada(500)

            const motoClone2 = motoPrototype.clone();
            motoClone2.setModelo(`Modelo Moto Clone 2`);
            motoClone2.setMarca(`Marca Moto Clone 2`);
            motoClone2.setCor('Cor MotoClone 2');
            motoClone2.setNumeroRodas(2);
            motoClone2.setCilindrada(500)

            moto.push(motoPrototype, motoClone1, motoClone2);    

        return moto;
    }

    static criarArrayDeVeiculos(): Veiculo[]  {
        const veiculos: Veiculo[] = [];
        
        // Crie clones de carros
        const carros = Aplicacao.criarCarros();
        veiculos.push (...carros)
        // veiculos.push(...carros);

        // Crie clones de motos
        const motos = Aplicacao.criarMotos();
        veiculos.push(...motos);

        return veiculos;
    }

}

const arrayDeVeiculos = Aplicacao.criarArrayDeVeiculos();
console.log(arrayDeVeiculos);


