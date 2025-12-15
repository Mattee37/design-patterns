# Visitor Pattern

## Intent

Represent an operation to be performed on elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.

## Problem

You need to perform many distinct operations on objects in a structure, and you don't want to pollute their classes with these operations.

## Solution

Create visitor classes that implement operations, and elements accept visitors that perform the operation.

## Diagram

```mermaid
classDiagram
    class Shape {
        <<interface>>
        +accept(visitor): void
    }
    
    class Circle {
        +radius: number
        +accept(visitor): void
    }
    
    class Rectangle {
        +width: number
        +height: number
        +accept(visitor): void
    }
    
    class ShapeVisitor {
        <<interface>>
        +visitCircle(circle): void
        +visitRectangle(rectangle): void
    }
    
    class AreaCalculator {
        +visitCircle(circle): void
        +visitRectangle(rectangle): void
    }
    
    class DrawVisitor {
        +visitCircle(circle): void
        +visitRectangle(rectangle): void
    }
    
    Shape <|.. Circle
    Shape <|.. Rectangle
    ShapeVisitor <|.. AreaCalculator
    ShapeVisitor <|.. DrawVisitor
    Shape ..> ShapeVisitor : accepts
```

## Our Example

We implement a shape system with multiple operations:

- **`types.ts`**: `Shape`, `ShapeVisitor`, `Circle`, and `Rectangle`
- **`visitors.ts`**: `AreaCalculator` and `DrawVisitor`
- **`index.ts`**: Applies different visitors to shapes

## Double Dispatch

```mermaid
sequenceDiagram
    participant Client
    participant Circle
    participant AreaCalculator
    
    Client->>Circle: accept(areaCalculator)
    Circle->>AreaCalculator: visitCircle(this)
    Note right of AreaCalculator: Calculates π × r²
    AreaCalculator-->>Client: result
```

The visitor knows which shape it's visiting, and the shape knows which visitor method to call—this is **double dispatch**.

## Adding Operations

```mermaid
flowchart LR
    subgraph "Without Visitor"
        C1[Circle] -->|add area| C2[Circle + area]
        C2 -->|add draw| C3[Circle + area + draw]
        C3 -->|add export| C4[Circle + area + draw + export]
    end
    
    subgraph "With Visitor"
        C[Circle] --> A[AreaVisitor]
        C --> D[DrawVisitor]
        C --> E[ExportVisitor]
    end
```

## When to Use

- When you need to perform many unrelated operations on objects
- When the object structure rarely changes but operations change frequently
- When you want to avoid polluting element classes with operations
- When operations need to work with the concrete types

## Trade-offs

✅ **Pros**: Easy to add new operations  
❌ **Cons**: Hard to add new element types (must update all visitors)

## Run

```bash
bun run behavioral:visitor
```

