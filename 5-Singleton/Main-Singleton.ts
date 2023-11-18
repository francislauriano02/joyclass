import readline from 'readline-sync';
import { SistemaSeguranca } from "./SistemaSeguranca";

export class ProgramaPrincipal {
    constructor() {};

    iniciar (): void {
        const senha = readline.question(`Informe a senha para acessar a base:`);
        const verificarSenha = SistemaSeguranca.getInstance();
        verificarSenha.acessarBaseSecreta(senha);   
    }  
}

const main = new ProgramaPrincipal();
main.iniciar();









