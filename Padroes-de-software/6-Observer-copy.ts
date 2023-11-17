// Em typescript aplique o padrão de projeto Observer para criar um editor de texto. Os requisitos do projeto são:
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


// // Interface do Observador
// interface Observer {
//   update(event: string): void;
// }


// interface Obserble {
//   addObserver(observer: Observer): void;
//   removeObserver(observer: Observer): void;
//   notify(event: string): void;

// }

// // Classe base do Observador
// class Subject implements Obserble{
//   private observers: Observer[] = [];

//   // Adicionar observadores
//   addObserver(observer: Observer) {
//     this.observers.push(observer);
//   }

//   // Remover observadores
//   removeObserver(observer: Observer) {
//     const index = this.observers.indexOf(observer);
//     if (index !== -1) {
//       this.observers.splice(index, 1);
//     }
//   }

//   // Notificar todos os observadores
//   notify(event: string) {
//     for (const observer of this.observers) {
//       observer.update(event);
//     }
//   }
// }


// // Classe Editor como Subject
// class Editor extends Subject {
//   text: string[] = [];

//   // Método para inserir uma linha de texto
//   insertLine(lineNumber: number, text: string) {
//     if (lineNumber <= this.text.length) {
//       this.text.splice(lineNumber, 0, text);
//     } else {
//       this.text.push(text);
//     }

//     this.notify('insertLine');
//   }

//   // Método para remover uma linha de texto
//   removeLine(lineNumber: number) {
//     if (lineNumber >= 0 && lineNumber < this.text.length) {
//       this.text.splice(lineNumber, 1);
//       this.notify('removeLine');
//     }
//   }

// }

// // Subclasse TextEditor
// class TextEditor extends Editor {
//   constructor() {
//     super();
//     this.addObserver(this);
//   }

//   // Método para salvar o conteúdo
//   save () {
//     // Simular a lógica de salvar em um arquivo (substitua isso com sua implementação real)
//     const content = this.text.join('\n');
//     console.log('Conteúdo salvo:\n', content);
//   }

//   // Método para receber linhas de texto do usuário
//   open () {
//     console.log('Comece a inserir linhas de texto. Digite "EOF" para finalizar.');

//     const readline = require('readline').createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });

//     readline.on('line', (line) => {
//       if (line === 'EOF') {
//         this.save();
//         readline.close();
//       } else {
//         this.insertLine(this.text.length, line);
//       }
//     });
//   }

//   // Método para atualizar quando o Editor notifica
//   update(event: string) {
//     if (event === 'insertLine' || event === 'removeLine') {
//       this.printContent();
//     }
//   }

//   // Método para imprimir o conteúdo do editor
//   printContent() {
//     console.log('Conteúdo atual:\n', this.text.join('\n'));
//   }
// }

// // Instanciando um TextEditor
// const textEditor = new TextEditor();

// // Disparando o evento "open"
// textEditor.notify('open');

// // Recebendo as linhas de texto do usuário
// textEditor.open();
