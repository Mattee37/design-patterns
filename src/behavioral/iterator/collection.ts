import type { Iterator, IterableCollection } from "./types";

class NumberIterator implements Iterator<number> {
  private position = 0;

  constructor(private collection: number[]) {}

  hasNext(): boolean {
    return this.position < this.collection.length;
  }

  next(): number {
    const item = this.collection[this.position]!;
    this.position++;
    return item;
  }
}

export class NumberCollection implements IterableCollection<number> {
  private items: number[] = [];

  add(item: number): void {
    this.items.push(item);
  }

  createIterator(): Iterator<number> {
    return new NumberIterator(this.items);
  }
}

