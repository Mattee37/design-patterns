export interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

export interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

