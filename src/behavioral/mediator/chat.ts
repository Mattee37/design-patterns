import type { Mediator, User } from "./types";

export class ChatRoom implements Mediator {
  private users: Map<string, User> = new Map();

  register(user: User): void {
    this.users.set(user.name, user);
    console.log(`📥 ${user.name} joined the chat`);
  }

  notify(sender: string, message: string): void {
    this.users.forEach((user, name) => {
      if (name !== sender) {
        user.receive(sender, message);
      }
    });
  }
}

export class ChatUser implements User {
  constructor(
    public name: string,
    private mediator: Mediator
  ) {}

  send(message: string): void {
    console.log(`💬 ${this.name} sends: "${message}"`);
    this.mediator.notify(this.name, message);
  }

  receive(from: string, message: string): void {
    console.log(`   ${this.name} received from ${from}: "${message}"`);
  }
}

