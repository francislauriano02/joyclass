import { Pato } from "./Pato";
import { AdaptadorPato } from "./AdaptadorPato";


// Classe AdaptadorPatoDemo para demonstrar o uso do adaptador
class AdaptadorPatoDemo {
    static demonstrarAdaptador(): void {
        const pato = new Pato();
        const adaptadorPato = new AdaptadorPato(pato);

        console.log('\nPato adaptado:');
        console.log(adaptadorPato.andar());
        console.log(adaptadorPato.cacarejar());
    }
}

// uso do adaptador
AdaptadorPatoDemo.demonstrarAdaptador();



