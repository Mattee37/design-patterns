import type { Context } from "./types";
import {
  NumberExpression,
  VariableExpression,
  AddExpression,
  SubtractExpression,
  MultiplyExpression,
} from "./expressions";

console.log("=== Interpreter Pattern ===\n");

const context: Context = {
  variables: new Map([
    ["x", 10],
    ["y", 5],
  ]),
};

// Expression: (x + y) * 2
const expression = new MultiplyExpression(
  new AddExpression(
    new VariableExpression("x"),
    new VariableExpression("y")
  ),
  new NumberExpression(2)
);

console.log("Variables: x = 10, y = 5");
console.log("Expression: (x + y) * 2");
console.log(`Result: ${expression.interpret(context)}`);

// Expression: x - (y + 3)
const expression2 = new SubtractExpression(
  new VariableExpression("x"),
  new AddExpression(new VariableExpression("y"), new NumberExpression(3))
);

console.log("\nExpression: x - (y + 3)");
console.log(`Result: ${expression2.interpret(context)}`);

// Change context
context.variables.set("x", 20);
console.log("\nAfter x = 20:");
console.log(`(x + y) * 2 = ${expression.interpret(context)}`);
console.log(`x - (y + 3) = ${expression2.interpret(context)}`);

