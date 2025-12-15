import {
  ShoppingCart,
  CreditCardPayment,
  PayPalPayment,
  CryptoPayment,
} from "./strategies";

console.log("=== Strategy Pattern ===\n");

const cart = new ShoppingCart();

cart.setPaymentMethod(new CreditCardPayment("**** **** **** 1234"));
cart.checkout(100);

cart.setPaymentMethod(new PayPalPayment("user@example.com"));
cart.checkout(50);

cart.setPaymentMethod(new CryptoPayment("0x1234...abcd"));
cart.checkout(200);

