import type { FileSystemItem } from "./types";

export class File implements FileSystemItem {
  constructor(
    public name: string,
    private size: number
  ) {}

  getSize(): number {
    return this.size;
  }

  print(indent = ""): void {
    console.log(`${indent}📄 ${this.name} (${this.size}KB)`);
  }
}

export class Folder implements FileSystemItem {
  private children: FileSystemItem[] = [];

  constructor(public name: string) {}

  add(item: FileSystemItem): void {
    this.children.push(item);
  }

  getSize(): number {
    return this.children.reduce((sum, child) => sum + child.getSize(), 0);
  }

  print(indent = ""): void {
    console.log(`${indent}📁 ${this.name} (${this.getSize()}KB)`);
    this.children.forEach((child) => child.print(indent + "  "));
  }
}

