import { Logger } from "./singleton";

console.log("=== Singleton Pattern ===\n");

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log("Are both instances the same?", logger1 === logger2);
console.log("");

logger1.log("First message from logger1");
logger2.log("Second message from logger2");
logger1.log("Third message from logger1");

console.log("\nAll logs from logger2:");
console.log(logger2.getLogs());

