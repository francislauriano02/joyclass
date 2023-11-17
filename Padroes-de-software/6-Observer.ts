// Em typescript aplique o padrão de projeto Observer para criar um editor de texto:
// - implementar uma subclasse da classe Editor chamada TextEditor;
// - aplicar o método insertLine, que recebe os parâmetros lineNumber e text;
// - inserir o texto na ordem correspondente a lineNumber e deslocar as linhas posteriores se necessário;
// - aplicar o método removeLine, que recebe lineNumber como parâmetro, deleta o texto da linha correspondente e 
// desloca as linhas posteriormente se necessário;
// - instanciar um TextEditor e disparar o evento "open";
// - receber as linhas de texto, que serão inseridas no objeto textEditor, do usuário até que ele envie o texto "EOF", 
// que não deve ser inserido no objeto textEditor;
// - por fim, o textEditor deve disparar o evento "save" para que o conteudo seja salvo no arquivo configurado e 
// imprimir todo conteudo do arquivo na tela.

// export interface Observer {
//     update (event: string): void; 
// }

// export class Sujeito {
//     private observers: Observer [] = [];
// }