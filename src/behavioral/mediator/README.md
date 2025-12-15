# Mediator Pattern

## Intent

Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly.

## Problem

You have many objects that communicate with each other, creating a complex web of dependencies.

## Solution

Introduce a mediator object that handles all communication between objects, so they only know about the mediator.

## Diagram

```mermaid
classDiagram
    class Mediator {
        <<interface>>
        +notify(sender, message): void
    }
    
    class ChatRoom {
        -users: Map~string, User~
        +register(user): void
        +notify(sender, message): void
    }
    
    class User {
        <<interface>>
        +name: string
        +send(message): void
        +receive(from, message): void
    }
    
    class ChatUser {
        +name: string
        -mediator: Mediator
        +send(message): void
        +receive(from, message): void
    }
    
    Mediator <|.. ChatRoom
    User <|.. ChatUser
    ChatRoom o-- User : manages
    ChatUser o-- Mediator : uses
```

## Our Example

We implement a chat room:

- **`types.ts`**: Defines `Mediator` and `User` interfaces
- **`chat.ts`**: `ChatRoom` (mediator) and `ChatUser` (colleague)
- **`index.ts`**: Users communicate through the chat room

## Communication Flow

```mermaid
sequenceDiagram
    participant Alice
    participant ChatRoom
    participant Bob
    participant Charlie
    
    Alice->>ChatRoom: send("Hello everyone!")
    ChatRoom->>Bob: receive("Alice", "Hello everyone!")
    ChatRoom->>Charlie: receive("Alice", "Hello everyone!")
    
    Bob->>ChatRoom: send("Hi Alice!")
    ChatRoom->>Alice: receive("Bob", "Hi Alice!")
    ChatRoom->>Charlie: receive("Bob", "Hi Alice!")
```

## Without vs With Mediator

```mermaid
flowchart TB
    subgraph "Without Mediator"
        A1[Alice] <--> B1[Bob]
        A1 <--> C1[Charlie]
        B1 <--> C1
    end
    
    subgraph "With Mediator"
        A2[Alice] <--> M[ChatRoom]
        B2[Bob] <--> M
        C2[Charlie] <--> M
    end
```

## When to Use

- When objects communicate in complex but well-defined ways
- When reusing an object is difficult because it refers to many other objects
- When you want to customize behavior distributed across several classes

## Run

```bash
bun run behavioral:mediator
```

