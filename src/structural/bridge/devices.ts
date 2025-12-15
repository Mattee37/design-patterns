import type { Device } from "./types";

export class TV implements Device {
  private on = false;
  private volume = 50;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
    console.log("📺 TV is ON");
  }

  disable(): void {
    this.on = false;
    console.log("📺 TV is OFF");
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(100, volume));
    console.log(`📺 TV volume: ${this.volume}`);
  }
}

export class Radio implements Device {
  private on = false;
  private volume = 30;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
    console.log("📻 Radio is ON");
  }

  disable(): void {
    this.on = false;
    console.log("📻 Radio is OFF");
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(100, volume));
    console.log(`📻 Radio volume: ${this.volume}`);
  }
}

