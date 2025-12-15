import type { TreeType } from "./types";

class TreeTypeImpl implements TreeType {
  constructor(
    public name: string,
    public color: string,
    public texture: string
  ) {}

  draw(x: number, y: number): void {
    console.log(`🌳 ${this.name} (${this.color}) at (${x}, ${y})`);
  }
}

export class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`;

    if (!this.treeTypes.has(key)) {
      console.log(`  [Factory] Creating new TreeType: ${name}`);
      this.treeTypes.set(key, new TreeTypeImpl(name, color, texture));
    }

    return this.treeTypes.get(key)!;
  }

  static getTypeCount(): number {
    return this.treeTypes.size;
  }
}

export class Tree {
  constructor(
    private x: number,
    private y: number,
    private type: TreeType
  ) {}

  draw(): void {
    this.type.draw(this.x, this.y);
  }
}

