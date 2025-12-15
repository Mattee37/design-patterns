import { Tree, TreeFactory } from "./flyweight";

console.log("=== Flyweight Pattern ===\n");

console.log("Creating forest with shared tree types:\n");

const trees: Tree[] = [];

for (let i = 0; i < 5; i++) {
  const oakType = TreeFactory.getTreeType("Oak", "green", "rough");
  trees.push(new Tree(Math.random() * 100, Math.random() * 100, oakType));
}

for (let i = 0; i < 3; i++) {
  const pineType = TreeFactory.getTreeType("Pine", "dark-green", "smooth");
  trees.push(new Tree(Math.random() * 100, Math.random() * 100, pineType));
}

console.log(`\nTotal trees: ${trees.length}`);
console.log(`Unique tree types: ${TreeFactory.getTypeCount()}`);

console.log("\nDrawing first 4 trees:");
trees.slice(0, 4).forEach((tree) => tree.draw());

