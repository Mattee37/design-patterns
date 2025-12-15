# Interpreter Pattern

## Intent

Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

## Problem

You have a simple language or grammar that needs to be evaluated, and you want a flexible way to parse and execute it.

## Solution

Define an abstract syntax tree (AST) where each node is an expression class with an `interpret()` method that evaluates itself.

## Diagram

```mermaid
classDiagram
    class Expression {
        <<interface>>
        +interpret(context): number
    }
    
    class Context {
        +variables: Map~string, number~
    }
    
    class NumberExpression {
        -value: number
        +interpret(context): number
    }
    
    class VariableExpression {
        -name: string
        +interpret(context): number
    }
    
    class AddExpression {
        -left: Expression
        -right: Expression
        +interpret(context): number
    }
    
    class SubtractExpression {
        -left: Expression
        -right: Expression
        +interpret(context): number
    }
    
    class MultiplyExpression {
        -left: Expression
        -right: Expression
        +interpret(context): number
    }
    
    Expression <|.. NumberExpression
    Expression <|.. VariableExpression
    Expression <|.. AddExpression
    Expression <|.. SubtractExpression
    Expression <|.. MultiplyExpression
    AddExpression o-- Expression : left, right
    SubtractExpression o-- Expression : left, right
    MultiplyExpression o-- Expression : left, right
```

## Our Example

We implement a simple arithmetic expression evaluator:

- **`types.ts`**: Defines `Expression` and `Context` interfaces
- **`expressions.ts`**: Terminal (`NumberExpression`, `VariableExpression`) and non-terminal expressions (`AddExpression`, `SubtractExpression`, `MultiplyExpression`, `DivideExpression`)
- **`index.ts`**: Builds and evaluates expression trees

## Expression Tree

For `(x + y) * 2`:

```mermaid
graph TD
    M["* (Multiply)"] --> A["+ (Add)"]
    M --> N2["2 (Number)"]
    A --> X["x (Variable)"]
    A --> Y["y (Variable)"]
```

## Evaluation Flow

```mermaid
sequenceDiagram
    participant Client
    participant Multiply
    participant Add
    participant VarX
    participant VarY
    participant Num2
    participant Context
    
    Client->>Multiply: interpret(context)
    Multiply->>Add: interpret(context)
    Add->>VarX: interpret(context)
    VarX->>Context: get("x")
    Context-->>VarX: 10
    Add->>VarY: interpret(context)
    VarY->>Context: get("y")
    Context-->>VarY: 5
    Add-->>Multiply: 15
    Multiply->>Num2: interpret(context)
    Num2-->>Multiply: 2
    Multiply-->>Client: 30
```

## Key Concepts

| Term | Description | Example |
|------|-------------|---------|
| **Terminal** | Leaf nodes, don't contain other expressions | `NumberExpression`, `VariableExpression` |
| **Non-terminal** | Composite nodes with child expressions | `AddExpression`, `MultiplyExpression` |
| **Context** | Shared state for interpretation | Variables map |

## Building Expressions

```typescript
// (x + y) * 2
const expr = new MultiplyExpression(
  new AddExpression(
    new VariableExpression("x"),
    new VariableExpression("y")
  ),
  new NumberExpression(2)
);

const result = expr.interpret({ variables: new Map([["x", 10], ["y", 5]]) });
// Result: 30
```

## Real-World Uses

- SQL query parsers
- Regular expression engines
- Mathematical expression evaluators
- Configuration file parsers
- Domain-specific languages (DSLs)

## When to Use

- When you have a simple grammar to interpret
- When efficiency is not critical (complex grammars are better with parser generators)
- When you want to represent statements as abstract syntax trees

## Trade-offs

✅ **Pros**: Easy to extend grammar, each rule is a class  
❌ **Cons**: Complex grammars create many classes, not efficient for large expressions

## Run

```bash
bun run src/behavioral/interpreter/index.ts
```

