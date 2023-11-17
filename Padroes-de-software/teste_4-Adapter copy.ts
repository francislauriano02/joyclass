// Padrão Adapter - Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse tipo Galinha. 
// Crie as Classe AdaptadorPato e AdaptadorPatoDemo para demosntrar o uso da classe

// Interface que descreve as funcionalidades de uma Galinha
export interface ITargetGalinha {
    getAnimalPadrao(): string;
    comportamentoPadrao(): string;
}

export interface IAdapteePato {
    getAnimalEspecifico(): string;
    comportamentoEspecifico(): string;
}


// Classe Galinha que implementa a interface ITargetGalinha
class Galinha implements ITargetGalinha {
    getAnimalPadrao(): string {
        return 'Galinha';
    }

    comportamentoPadrao(): string {
        return 'Galinha faz Cocoricó';
    }
}



// Implementação de uma classe Pato que segue a interface IAdapteePato
export class Pato implements IAdapteePato {
    getAnimalEspecifico(): string {
        return 'Pato';
    }

    comportamentoEspecifico(): string {
        return 'Pato faz Quack';
    }
}



// Adaptador para Pato, implementando a interface ITargetGalinha
export class AdaptadorPato implements ITargetGalinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    getAnimalPadrao(): string {
        return this.pato.getAnimalEspecifico();
    }

    comportamentoPadrao(): string {
        return this.pato.comportamentoEspecifico();
    }
}



// Classe AdaptadorPatoDemo para demonstrar o uso do adaptador
class AdaptadorPatoDemo {
    static demonstrarAdaptador(): void {
        const galinha = new Galinha();
        console.log('Galinha:');
        console.log('Tipo de animal: ' + galinha.getAnimalPadrao());
        console.log('Comportamento: ' + galinha.comportamentoPadrao());

        const pato = new Pato();
        const adaptadorPato = new AdaptadorPato(pato);
        console.log('\nPato adaptado como Galinha:');
        console.log('Tipo de animal: ' + adaptadorPato.getAnimalPadrao());
        console.log('Comportamento: ' + adaptadorPato.comportamentoPadrao());


    }
}

// Demonstra o uso do adaptador
AdaptadorPatoDemo.demonstrarAdaptador();



