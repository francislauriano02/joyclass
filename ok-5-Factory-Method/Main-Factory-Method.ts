import { IComputador } from "./IComputador";
import { Pc } from "./Pc";
import { Server } from "./Server";

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


