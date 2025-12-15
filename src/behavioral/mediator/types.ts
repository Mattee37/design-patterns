export interface Mediator {
  notify(sender: string, message: string): void;
}

export interface User {
  name: string;
  send(message: string): void;
  receive(from: string, message: string): void;
}

