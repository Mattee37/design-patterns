import type { Observer, Subject } from "./types";

export class Newsletter implements Subject {
  private subscribers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.subscribers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.subscribers = this.subscribers.filter((s) => s !== observer);
  }

  notify(message: string): void {
    this.subscribers.forEach((subscriber) => subscriber.update(message));
  }

  publish(article: string): void {
    console.log(`📰 Publishing: "${article}"`);
    this.notify(article);
  }
}

export class Subscriber implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`   📧 ${this.name} received: "${message}"`);
  }
}

