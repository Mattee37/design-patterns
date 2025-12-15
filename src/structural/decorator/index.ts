import {
  SimpleCoffee,
  MilkDecorator,
  SugarDecorator,
  WhippedCreamDecorator,
} from "./coffee";

console.log("=== Decorator Pattern ===\n");

let coffee = new SimpleCoffee();
console.log(`☕ ${coffee.description()}: $${coffee.cost()}`);

coffee = new MilkDecorator(coffee);
console.log(`☕ ${coffee.description()}: $${coffee.cost()}`);

coffee = new SugarDecorator(coffee);
console.log(`☕ ${coffee.description()}: $${coffee.cost()}`);

coffee = new WhippedCreamDecorator(coffee);
console.log(`☕ ${coffee.description()}: $${coffee.cost()}`);

console.log("\n--- Another order ---\n");

const latte = new WhippedCreamDecorator(
  new MilkDecorator(new MilkDecorator(new SimpleCoffee()))
);
console.log(`☕ ${latte.description()}: $${latte.cost()}`);

