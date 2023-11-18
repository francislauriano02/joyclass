import { Subject } from "./Subject";

export class TextEditor extends Subject {
    private lines: string[] = [];

    insertLine(lineNumber: number, text: string): void {
        this.lines.splice(lineNumber - 1, 0, text);
        this.notifyObservers();
    }

    removeLine(lineNumber: number): void {
        if (lineNumber >= 1 && lineNumber <= this.lines.length) {
            this.lines.splice(lineNumber - 1, 1);
            this.notifyObservers();
        }
    }

    getLines(): string[] {
        return this.lines;
    }

    saveToFile(): void {
        // Lógica para salvar o conteúdo em um arquivo
        console.log("Conteúdo salvo no arquivo.");
    }
}