import { ChatRoom, ChatUser } from "./chat";

console.log("=== Mediator Pattern ===\n");

const chatRoom = new ChatRoom();

const alice = new ChatUser("Alice", chatRoom);
const bob = new ChatUser("Bob", chatRoom);
const charlie = new ChatUser("Charlie", chatRoom);

chatRoom.register(alice);
chatRoom.register(bob);
chatRoom.register(charlie);

console.log("");
alice.send("Hello everyone!");
console.log("");
bob.send("Hi Alice!");

