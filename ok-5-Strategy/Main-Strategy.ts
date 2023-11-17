import readline from 'readline-sync';
import { ContextoStrategy } from './ContextoStrategy';
import { StrategySoma } from './StrategySoma';
import { StrategySubtracao } from './StrategySubtracao';
import { StrategyMultiplicacao } from './StrategyMultiplicacao';

export class AplicarStrategy {

    constructor () {};    
    static aplicar (): void {
        
        const contexto = new ContextoStrategy(new StrategySoma())
        const num1 = readline.questionInt(`Digite o primeiro número: `);
        const num2 = readline.questionInt(`Digite o segundo número: `)

        console.log(`Qual ação deseja realizar?`);
        console.log(`1. Adição\t 2. Subtração\t 3. Multiplicação`);
        const action = readline.questionInt(`Escolha a opção desejada: `);

        switch (action) {
            case 1:
                contexto.setStrategy(new StrategySoma());
                console.log('Resultado da Adição:', contexto.executeStrategy(num1, num2));
                break;
            case 2:
                contexto.setStrategy(new StrategySubtracao());
                console.log('Resultado da Subtração:', contexto.executeStrategy(num1, num2));
                break;
            case 3:
                contexto.setStrategy(new StrategyMultiplicacao());
                console.log('Resultado da multiplicação:', contexto.executeStrategy(num1, num2));
                break;
            default:
                console.log(`Opção Inválida!`);
                break;
        }
    
    }
}

AplicarStrategy.aplicar();

