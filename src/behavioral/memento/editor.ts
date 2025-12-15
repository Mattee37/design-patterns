import type { Memento } from "./types";

class EditorMemento implements Memento {
  constructor(
    private state: string,
    private date: Date
  ) {}

  getState(): string {
    return this.state;
  }

  getDate(): string {
    return this.date.toISOString();
  }
}

export class Editor {
  private content = "";

  type(text: string): void {
    this.content += text;
  }

  getContent(): string {
    return this.content;
  }

  save(): Memento {
    return new EditorMemento(this.content, new Date());
  }

  restore(memento: Memento): void {
    this.content = memento.getState();
  }
}

export class History {
  private mementos: Memento[] = [];

  push(memento: Memento): void {
    this.mementos.push(memento);
  }

  pop(): Memento | undefined {
    return this.mementos.pop();
  }
}

