import { IAdapteePato } from "./IAdapteePato ";

// Implementação de uma classe Pato que segue a interface IAdapteePato
export class Pato implements IAdapteePato {
    voar(): string {
        return 'Pato voa';
    }

    grasnar(): string {
        return 'Pato faz Quack';
    }
}