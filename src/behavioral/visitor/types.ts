export interface Shape {
  accept(visitor: ShapeVisitor): void;
}

export interface ShapeVisitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}

export class Circle implements Shape {
  constructor(public radius: number) {}

  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}

export class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}

  accept(visitor: ShapeVisitor): void {
    visitor.visitRectangle(this);
  }
}

