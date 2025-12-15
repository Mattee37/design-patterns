import type { ShapeVisitor, Circle, Rectangle } from "./types";

export class AreaCalculator implements ShapeVisitor {
  visitCircle(circle: Circle): void {
    const area = Math.PI * circle.radius ** 2;
    console.log(`⭕ Circle area: ${area.toFixed(2)}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    const area = rectangle.width * rectangle.height;
    console.log(`⬜ Rectangle area: ${area}`);
  }
}

export class DrawVisitor implements ShapeVisitor {
  visitCircle(circle: Circle): void {
    console.log(`🎨 Drawing circle with radius ${circle.radius}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    console.log(
      `🎨 Drawing rectangle ${rectangle.width}x${rectangle.height}`
    );
  }
}

