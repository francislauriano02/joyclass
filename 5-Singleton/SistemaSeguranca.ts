export class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = 'senhaSecreta-123';

    private constructor () {};

    static getInstance (): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca()
        }
        return SistemaSeguranca.instance;
    }

    acessarBaseSecreta (senha: string): void {

        if (senha === this.senhaBaseSecreta) {
            console.log(`Acesso Liberado!`);  
        }else{
            console.log(`Acesso Negado!`);
            
        }
    }
}