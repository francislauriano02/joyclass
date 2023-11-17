import * as readline from 'readline';
import * as fs from 'fs';

// Definindo a interface Observer
interface Observer {
  update(event: string, lineNumber?: number, lineText?: string): void;
}

// Definindo a interface Subject
interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(event: string, lineNumber?: number, lineText?: string): void;
}

// Classe Editor que atua como um Subject
class Editor implements Subject {
  private observers: Observer[] = [];
  private lines: string[] = [];

  addObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(event: string, lineNumber?: number, lineText?: string) {
    for (const observer of this.observers) {
      observer.update(event, lineNumber, lineText);
    }
  }

  insertLine(lineNumber: number, text: string) {
    if (lineNumber < 0) {
      lineNumber = 0;
    } else if (lineNumber > this.lines.length) {
      lineNumber = this.lines.length;
    }

    this.lines.splice(lineNumber, 0, text);
  }

  removeLine(lineNumber: number) {
    if (lineNumber >= 0 && lineNumber < this.lines.length) {
      this.lines.splice(lineNumber, 1);
    }
  }

  getLines() {
    return this.lines;
  }
}

// Classe TextEditor que atua como um Observer
class TextEditor implements Observer {
  private editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
    editor.addObserver(this);
  }

  update(event: string, lineNumber?: number, lineText?: string) {
    if (event === "saveAndPrint") {
      const content = this.editor.getLines().join('\n');
      console.log('Texto digitado:');
      console.log(content);

      fs.writeFile('texto.txt', content, (err) => {
        if (err) {
          console.error('Erro ao salvar o arquivo:', err);
        } else {
          console.log('Conteúdo do TextEditor salvo no arquivo "texto.txt".');
        }
      });
    }
  }

  open() {
    console.log("Abrindo o TextEditor...");
    console.log("Digite as linhas de texto. Digite 'EOF' para finalizar.");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const lines: string[] = [];

    rl.on("line", (input) => {
      if (input.trim().toLowerCase() === "eof") {
        rl.close();
        this.editor.notifyObservers("saveAndPrint");
      } else {
        lines.push(input);
      }
    });

    rl.on("close", () => {
      // Quando o usuário encerrar a entrada
      lines.forEach((line) => {
        this.editor.insertLine(this.editor.getLines().length, line);
      });
    });
  }
}

// Instanciar o Editor e o TextEditor
const editor = new Editor();
const textEditor = new TextEditor(editor);

// Disparar o evento "open"
textEditor.open();
