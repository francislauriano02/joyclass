import readline from 'readline-sync';

export interface Strategy {
    execute (num1: number, num2: number): number;
}


export class StrategySoma implements Strategy {
    execute (num1: number, num2: number): number {
        return num1 + num2
    }
}


export class StrategySubtracao implements Strategy {
    execute (num1: number, num2: number): number {
        return num1 - num2
    }
}


export class StrategyMultiplicacao implements Strategy {
    execute (num1: number, num2: number): number {
        return num1 * num2
    }
}


export class ContextoStrategy {
    private strategy: Strategy

    setStrategy (strategy: Strategy): void {
        this.strategy = strategy;

    }

    executeStrategy (num1: number, num2: number): number {
        return this.strategy.execute(num1, num2);
    }
}


export class AplicarStrategy {
    
    static aplicar (): void {
        
        let contexto = new ContextoStrategy ();
        const num1 = readline.questionInt(`Digite o primeiro número: `);
        const num2 = readline.questionInt(`Digite o segundo número: `)

        console.log(`Qual ação deseja realizar?`);
        console.log(`1. Adição\t 2. Subtração\t 3. Multiplicação`);
        const action = readline.questionInt(`Escolha a opção desejada: `);

        switch (action) {
            case 1:
                contexto.setStrategy(new StrategySoma());
                break;
            case 2:
                contexto.setStrategy(new StrategySubtracao());
                break;
            case 3:
                contexto.setStrategy(new StrategyMultiplicacao());
                break;
            default:
                `Opção Inválida!`
                break;
        }
    console.log(`Resultado: ${contexto.executeStrategy(num1, num2)}`);
    }
}

AplicarStrategy.aplicar();

