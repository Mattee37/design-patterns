export interface SupportRequest {
  type: "basic" | "technical" | "billing";
  message: string;
}

export interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: SupportRequest): void;
}

