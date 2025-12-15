import type { Expression, Context } from "./types";

export class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(_context: Context): number {
    return this.value;
  }
}

export class VariableExpression implements Expression {
  constructor(private name: string) {}

  interpret(context: Context): number {
    return context.variables.get(this.name) ?? 0;
  }
}

export class AddExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret(context: Context): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

export class SubtractExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret(context: Context): number {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}

export class MultiplyExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret(context: Context): number {
    return this.left.interpret(context) * this.right.interpret(context);
  }
}

export class DivideExpression implements Expression {
  constructor(
    private left: Expression,
    private right: Expression
  ) {}

  interpret(context: Context): number {
    const right = this.right.interpret(context);
    if (right === 0) throw new Error("Division by zero");
    return this.left.interpret(context) / right;
  }
}

