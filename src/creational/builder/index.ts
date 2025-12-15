import { PizzaBuilder } from "./builder";

console.log("=== Builder Pattern ===\n");

const builder = new PizzaBuilder();

const margherita = builder.setSize("medium").addCheese().build();

console.log("Margherita:", margherita);

const supreme = builder
  .setSize("large")
  .addCheese()
  .addPepperoni()
  .addMushrooms()
  .addOlives()
  .build();

console.log("Supreme:", supreme);

const small = builder.setSize("small").addCheese().addPepperoni().build();

console.log("Small Pepperoni:", small);

