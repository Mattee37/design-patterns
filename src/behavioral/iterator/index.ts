import { NumberCollection } from "./collection";

console.log("=== Iterator Pattern ===\n");

const collection = new NumberCollection();
collection.add(10);
collection.add(20);
collection.add(30);
collection.add(40);

const iterator = collection.createIterator();

console.log("Iterating through collection:");
while (iterator.hasNext()) {
  console.log(`  → ${iterator.next()}`);
}

console.log("\nNew iterator (starts fresh):");
const iterator2 = collection.createIterator();
console.log(`  First: ${iterator2.next()}`);
console.log(`  Second: ${iterator2.next()}`);

