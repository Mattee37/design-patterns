import type { Handler, SupportRequest } from "./types";

abstract class BaseHandler implements Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: SupportRequest): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log("❌ No handler available for this request");
    }
  }
}

export class BasicSupport extends BaseHandler {
  override handle(request: SupportRequest): void {
    if (request.type === "basic") {
      console.log(`📞 Basic Support: "${request.message}"`);
    } else {
      super.handle(request);
    }
  }
}

export class TechnicalSupport extends BaseHandler {
  override handle(request: SupportRequest): void {
    if (request.type === "technical") {
      console.log(`🔧 Technical Support: "${request.message}"`);
    } else {
      super.handle(request);
    }
  }
}

export class BillingSupport extends BaseHandler {
  override handle(request: SupportRequest): void {
    if (request.type === "billing") {
      console.log(`💰 Billing Support: "${request.message}"`);
    } else {
      super.handle(request);
    }
  }
}

