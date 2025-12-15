import { BasicSupport, TechnicalSupport, BillingSupport } from "./handlers";
import type { SupportRequest } from "./types";

console.log("=== Chain of Responsibility Pattern ===\n");

const basic = new BasicSupport();
const technical = new TechnicalSupport();
const billing = new BillingSupport();

basic.setNext(technical).setNext(billing);

const requests: SupportRequest[] = [
  { type: "basic", message: "How do I reset my password?" },
  { type: "technical", message: "App crashes on startup" },
  { type: "billing", message: "Refund request" },
];

requests.forEach((req) => basic.handle(req));

