import { ITargetGalinha } from "./ITargetGalinha";

// Classe Galinha que implementa a interface ITargetGalinha
export class Galinha implements ITargetGalinha {
    andar(): string {
        return 'Galinha anda';
    }

    cacarejar(): string {
        return 'Galinha faz Cocoricó';
    }
}