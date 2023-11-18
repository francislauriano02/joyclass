import { Veiculo } from "./Veiculo";
import { Carro } from "./Carro";
import { Moto } from "./Moto";



class Aplicacao {
    static criarVeiculos(): Veiculo[]  {
        const veiculos: Veiculo[] = [];

        const carro1 = new Carro('Modelo Carro 1', 'Marca Carro 1', 'Cor Carro 1', 4, 4);
        const moto1 = new Moto('Modelo Moto 1', 'Marca Moto 1', 'Cor Moto 1', 2, 600);

        veiculos.push(carro1, moto1);

        // Clonar os veículos existentes para preencher o array
        for (let i = 0; i < 2; i++) {
            veiculos.push(carro1.clone());
            veiculos.push(moto1.clone());
        }

        return veiculos;
    }  
    
    
    static clonarArrayVeiculos(veiculos: Veiculo[]): Veiculo[] {
        return veiculos.map((veiculo) => veiculo.clone());
    }
        
}

const veiculos = Aplicacao.criarVeiculos();
const cloneArrayVeiculos = Aplicacao.clonarArrayVeiculos(veiculos);

// Imprimindo 
cloneArrayVeiculos.forEach((veiculo) => {
    console.log(veiculo.represent());
});


