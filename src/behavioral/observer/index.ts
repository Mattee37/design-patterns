import { Newsletter, Subscriber } from "./newsletter";

console.log("=== Observer Pattern ===\n");

const newsletter = new Newsletter();

const alice = new Subscriber("Alice");
const bob = new Subscriber("Bob");
const charlie = new Subscriber("Charlie");

newsletter.subscribe(alice);
newsletter.subscribe(bob);
newsletter.subscribe(charlie);

newsletter.publish("New TypeScript 5.0 Features!");

console.log("\nBob unsubscribes...\n");
newsletter.unsubscribe(bob);

newsletter.publish("Bun 1.0 Released!");

