import * as readline from 'readline';

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
    this.notifyObservers("lineInserted", lineNumber, text);
  }

  removeLine(lineNumber: number) {
    if (lineNumber >= 0 && lineNumber < this.lines.length) {
      const removedLine = this.lines.splice(lineNumber, 1)[0];
      this.notifyObservers("lineRemoved", lineNumber, removedLine);
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
    if (event === "lineInserted") {
      console.log(`Linha inserida na posição ${lineNumber}: ${lineText}`);
    } else if (event === "lineRemoved") {
      console.log(`Linha removida na posição ${lineNumber}: ${lineText}`);
    }
  }

  open() {
    console.log("Abrindo o TextEditor...");
    this.editor.getLines().forEach((line, index) => {
      this.update("lineInserted", index, line);
    });
    console.log("TextEditor aberto.");
  }

  save() {
    console.log("Salvando o conteúdo do TextEditor...");
    this.editor.getLines().forEach((line, index) => {
      console.log(`Linha ${index}: ${line}`);
    });
    console.log("Conteúdo do TextEditor salvo.");
  }
}

// Função para simular a entrada do usuário
function simulateUserInput(editor: Editor) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Digite as linhas de texto. Digite 'EOF' para finalizar.");

  rl.on("line", (input) => {
    if (input.trim().toLowerCase() === "eof") {
      rl.close();
      editor.notifyObservers("save");
    } else {
      editor.insertLine(editor.getLines().length, input);
    }
  });
}

// Instanciar o Editor e o TextEditor
const editor = new Editor();
const textEditor = new TextEditor(editor);

// Disparar o evento "open"
textEditor.open();

// Iniciar a entrada do usuário
simulateUserInput(editor);
