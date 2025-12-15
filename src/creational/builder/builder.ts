import type { Pizza } from "./types";

export class PizzaBuilder {
  private pizza: Pizza = {
    size: "medium",
    cheese: false,
    pepperoni: false,
    mushrooms: false,
    olives: false,
  };

  setSize(size: "small" | "medium" | "large"): this {
    this.pizza.size = size;
    return this;
  }

  addCheese(): this {
    this.pizza.cheese = true;
    return this;
  }

  addPepperoni(): this {
    this.pizza.pepperoni = true;
    return this;
  }

  addMushrooms(): this {
    this.pizza.mushrooms = true;
    return this;
  }

  addOlives(): this {
    this.pizza.olives = true;
    return this;
  }

  build(): Pizza {
    const result = { ...this.pizza };
    this.reset();
    return result;
  }

  private reset(): void {
    this.pizza = {
      size: "medium",
      cheese: false,
      pepperoni: false,
      mushrooms: false,
      olives: false,
    };
  }
}

