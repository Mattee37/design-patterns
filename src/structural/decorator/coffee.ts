import type { Coffee } from "./types";

export class SimpleCoffee implements Coffee {
  cost(): number {
    return 2;
  }

  description(): string {
    return "Coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

export class MilkDecorator extends CoffeeDecorator {
  override cost(): number {
    return this.coffee.cost() + 0.5;
  }

  override description(): string {
    return this.coffee.description() + " + Milk";
  }
}

export class SugarDecorator extends CoffeeDecorator {
  override cost(): number {
    return this.coffee.cost() + 0.25;
  }

  override description(): string {
    return this.coffee.description() + " + Sugar";
  }
}

export class WhippedCreamDecorator extends CoffeeDecorator {
  override cost(): number {
    return this.coffee.cost() + 0.75;
  }

  override description(): string {
    return this.coffee.description() + " + Whipped Cream";
  }
}

