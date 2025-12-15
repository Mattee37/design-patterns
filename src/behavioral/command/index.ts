import { TextEditor, WriteCommand, CommandHistory } from "./commands";

console.log("=== Command Pattern ===\n");

const editor = new TextEditor();
const history = new CommandHistory();

history.execute(new WriteCommand(editor, "Hello"));
editor.print();

history.execute(new WriteCommand(editor, " World"));
editor.print();

history.execute(new WriteCommand(editor, "!"));
editor.print();

console.log("\nUndo last command:");
history.undo();
editor.print();

console.log("\nUndo again:");
history.undo();
editor.print();

