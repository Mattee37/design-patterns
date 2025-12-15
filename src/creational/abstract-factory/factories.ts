import type { Button, Input, UIFactory } from "./types";

class DarkButton implements Button {
  render(): void {
    console.log("[Dark Button] ⬛");
  }
}

class DarkInput implements Input {
  render(): void {
    console.log("[Dark Input] ⬛ |_______|");
  }
}

class LightButton implements Button {
  render(): void {
    console.log("[Light Button] ⬜");
  }
}

class LightInput implements Input {
  render(): void {
    console.log("[Light Input] ⬜ |_______|");
  }
}

export class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createInput(): Input {
    return new DarkInput();
  }
}

export class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createInput(): Input {
    return new LightInput();
  }
}

