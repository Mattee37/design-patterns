import { Editor, History } from "./editor";

console.log("=== Memento Pattern ===\n");

const editor = new Editor();
const history = new History();

editor.type("Hello");
history.push(editor.save());
console.log(`📝 State 1: "${editor.getContent()}"`);

editor.type(" World");
history.push(editor.save());
console.log(`📝 State 2: "${editor.getContent()}"`);

editor.type("!!!");
console.log(`📝 State 3: "${editor.getContent()}"`);

console.log("\nRestoring to previous state...");
const memento = history.pop();
if (memento) {
  editor.restore(memento);
  console.log(`📝 Restored: "${editor.getContent()}"`);
}

console.log("\nRestoring again...");
const memento2 = history.pop();
if (memento2) {
  editor.restore(memento2);
  console.log(`📝 Restored: "${editor.getContent()}"`);
}

