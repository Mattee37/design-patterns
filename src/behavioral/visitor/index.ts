import { Circle, Rectangle } from "./types";
import { AreaCalculator, DrawVisitor } from "./visitors";

console.log("=== Visitor Pattern ===\n");

const shapes = [new Circle(5), new Rectangle(4, 6), new Circle(3)];

console.log("Calculating areas:");
const areaCalculator = new AreaCalculator();
shapes.forEach((shape) => shape.accept(areaCalculator));

console.log("\nDrawing shapes:");
const drawer = new DrawVisitor();
shapes.forEach((shape) => shape.accept(drawer));

