import type { PaymentStrategy } from "./types";

export class CreditCardPayment implements PaymentStrategy {
  constructor(private cardNumber: string) {}

  pay(amount: number): void {
    console.log(`💳 Paid $${amount} with credit card ${this.cardNumber}`);
  }
}

export class PayPalPayment implements PaymentStrategy {
  constructor(private email: string) {}

  pay(amount: number): void {
    console.log(`🅿️  Paid $${amount} via PayPal (${this.email})`);
  }
}

export class CryptoPayment implements PaymentStrategy {
  constructor(private wallet: string) {}

  pay(amount: number): void {
    console.log(`₿  Paid $${amount} with crypto wallet ${this.wallet}`);
  }
}

export class ShoppingCart {
  private strategy: PaymentStrategy | null = null;

  setPaymentMethod(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  checkout(amount: number): void {
    if (!this.strategy) {
      console.log("❌ No payment method selected");
      return;
    }
    this.strategy.pay(amount);
  }
}

