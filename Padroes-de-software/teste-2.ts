// // Interface do Observador - IObserver
// interface IObserver {
//     update(args: string): void;
// }
  
// // Classe Observer implementando a interface IObserver
// class Observer implements IObserver {
//     update(event: string): void {
//         // Lógica de atualização do observador
//     }
// }

// // Interface do Observado - IObservable
// interface IObservable {
//     addObserver(observer: Observer): void;
//     removeObserver(observer: Observer): void;
//     notify(event: string): void;
// }

// // Classe Subject implementando IObservable
// class Subject implements IObservable {
//     private observers: Observer[] = [];

//     // Adicionar observadores
//     addObserver(observer: Observer) {
//         this.observers.push(observer);
//     }

//     // Remover observadores
//     removeObserver(observer: Observer) {
//         const index = this.observers.indexOf(observer);
//         if (index !== -1) {
//         this.observers.splice(index, 1);
//         }
//     }

//     // Notificar todos os observadores
//     notify(event: string) {
//         for (const observer of this.observers) {
//         observer.update(event);
//         }
//     }
// }

// // Classe Editor sem herança
// class Editor {
//     text: string[] = [];
//     private subject: Subject = new Subject();

//     constructor() {
//         this.subject.addObserver(new Observer()); // Você pode adicionar observadores aqui
//     }

//     // Método para inserir uma linha de texto
//     insertLine(lineNumber: number, text: string) {
//         if (lineNumber <= this.text.length) {
//         this.text.splice(lineNumber, 0, text);
//         } else {
//         this.text.push(text);
//         }

//         this.subject.notify('insertLine');
//     }

//     // Método para remover uma linha de texto
//     removeLine(lineNumber: number) {
//         if (lineNumber >= 0 && lineNumber < this.text.length) {
//         this.text.splice(lineNumber, 1);
//         this.subject.notify('removeLine');
//         }
//     }
// }

// // Subclasse TextEditor
// class TextEditor extends Editor {
//     // Método para salvar o conteúdo
//     save() {
//         // Simular a lógica de salvar em um arquivo (substitua isso com sua implementação real)
//         const content = this.text.join('\n');
//         console.log('Conteúdo salvo:\n', content);
//     }

//     // Método para receber linhas de texto do usuário
//     open() {
//         console.log('Comece a inserir linhas de texto. Digite "EOF" para finalizar.');

//         const readline = require('readline').createInterface({
//         input: process.stdin,
//         output: process.stdout,
//         });

//         readline.on('line', (line) => {
//         if (line === 'EOF') {
//             this.save();
//             readline.close();
//         } else {
//             this.insertLine(this.text.length, line);
//         }
//         });
//     }

//     // Método para atualizar quando o Editor notifica
//     update(event: string) {
//         if (event === 'insertLine' || event === 'removeLine') {
//         this.printContent();
//         }
//     }

//     // Método para imprimir o conteúdo do editor
//     printContent() {
//         console.log('Conteúdo atual:\n', this.text.join('\n'));
//     }
// }

// // instância do TextEditor
// const textEditor = new TextEditor();

// // Abrir o editor para receber entradas do usuário
// textEditor.open();

// // Adiciona algumas linhas de texto
// textEditor.insertLine(0, "Esta é a primeira linha.");
// textEditor.insertLine(1, "Esta é a segunda linha.");
// textEditor.insertLine(2, "E aqui vai a terceira linha.");

// // Remove a segunda linha (linha 1)
// textEditor.removeLine(1);

// // Imprime o conteúdo atual
// textEditor.printContent();

// // Salva o conteúdo
// textEditor.save();


