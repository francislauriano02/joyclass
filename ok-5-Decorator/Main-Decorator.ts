import { SanduinchePadrao } from "./SanduinchePadrao";
import { QueijoMussarelaRadaloDecorator } from "./QueijoMussarelaRadaloDecorator";
import { PepperoniDecorator } from "./PepperoniDecorator";

const sanduicheDeFrango = new SanduinchePadrao('Frango Assado', 4.50);
console.log(sanduicheDeFrango.toString());

const sanduicheDeCarne = new SanduinchePadrao('Carne', 7.49);
console.log(sanduicheDeCarne.toString());

const sanduicheDeFrangoComQueijo = new QueijoMussarelaRadaloDecorator (sanduicheDeFrango);
console.log(sanduicheDeFrangoComQueijo.toString());

const sanduicheDeFrangoComQueijoEPepperoni = new PepperoniDecorator (sanduicheDeFrangoComQueijo);
console.log(sanduicheDeFrangoComQueijoEPepperoni.toString());







