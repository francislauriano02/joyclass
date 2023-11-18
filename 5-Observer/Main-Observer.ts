import readline from 'readline-sync';
import { TextEditor } from './TextEditor';
import { Editor } from './Editor';

export class TextEditorApp {
    static main(): void {
        const editor = new TextEditor();

        const userObserver = new Editor();
        editor.addObserver(userObserver);

        console.log("Digite as linhas de texto (Digite 'EOF' para finalizar):");
        let lineNumber = 1;
        let userInput = "";

        do {
            userInput = readline.question(`Linha ${lineNumber}: `).toLowerCase();
            if (userInput !== "eof") {
                editor.insertLine(lineNumber, userInput);
                lineNumber++;
            }
        } while (userInput !== "eof");

        editor.saveToFile();
        const content = editor.getLines().join('\n');
        console.log(`Conteúdo do arquivo:\n${content}`);
    }
}

TextEditorApp.main();
