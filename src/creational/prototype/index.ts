import { Document } from "./document";

console.log("=== Prototype Pattern ===\n");

const template = new Document(
  "Contract Template",
  "This is a legal contract...",
  "Legal Team"
);

console.log("Original:");
template.print();

const contract1 = template.clone();
contract1.title = "Contract for John";
contract1.content = "Agreement with John Doe...";

const contract2 = template.clone();
contract2.title = "Contract for Jane";
contract2.content = "Agreement with Jane Smith...";

console.log("Cloned documents:");
contract1.print();
contract2.print();

console.log("Original unchanged:");
template.print();

