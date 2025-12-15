import type { Command } from "./types";

export class TextEditor {
  content = "";

  write(text: string): void {
    this.content += text;
  }

  deleteLast(count: number): void {
    this.content = this.content.slice(0, -count);
  }

  print(): void {
    console.log(`📝 Content: "${this.content}"`);
  }
}

export class WriteCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string
  ) {}

  execute(): void {
    this.editor.write(this.text);
  }

  undo(): void {
    this.editor.deleteLast(this.text.length);
  }
}

export class CommandHistory {
  private history: Command[] = [];

  execute(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undo(): void {
    const command = this.history.pop();
    if (command) {
      command.undo();
    }
  }
}

