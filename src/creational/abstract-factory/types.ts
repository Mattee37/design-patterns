export interface Button {
  render(): void;
}

export interface Input {
  render(): void;
}

export interface UIFactory {
  createButton(): Button;
  createInput(): Input;
}

