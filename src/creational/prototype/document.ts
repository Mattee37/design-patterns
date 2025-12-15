import type { Prototype } from "./types";

export class Document implements Prototype<Document> {
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {}

  clone(): Document {
    return new Document(this.title, this.content, this.author);
  }

  print(): void {
    console.log(`📄 "${this.title}" by ${this.author}`);
    console.log(`   Content: ${this.content}\n`);
  }
}

