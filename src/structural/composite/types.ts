export interface FileSystemItem {
  name: string;
  getSize(): number;
  print(indent?: string): void;
}

