import { ITargetGalinha } from "./ITargetGalinha";
import { Pato } from "./Pato";

// Adaptador para Pato - implementando a interface ITargetGalinha
export class AdaptadorPato implements ITargetGalinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    andar(): string {
        return this.pato.voar(); // Adapta o método voar para o método andar
    }

    cacarejar(): string {
        return this.pato.grasnar(); // Adapta o método grasnar para o método cacarejar
    }

    


}