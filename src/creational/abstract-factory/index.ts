import type { UIFactory } from "./types";
import { DarkThemeFactory, LightThemeFactory } from "./factories";

function renderUI(factory: UIFactory): void {
  const button = factory.createButton();
  const input = factory.createInput();

  button.render();
  input.render();
}

console.log("=== Abstract Factory Pattern ===\n");

console.log("Dark Theme:");
renderUI(new DarkThemeFactory());

console.log("\nLight Theme:");
renderUI(new LightThemeFactory());

