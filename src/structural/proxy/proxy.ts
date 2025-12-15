import type { Image } from "./types";

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`⏳ Loading image: ${this.filename}`);
  }

  display(): void {
    console.log(`🖼️  Displaying: ${this.filename}`);
  }
}

export class ImageProxy implements Image {
  private realImage: RealImage | null = null;

  constructor(private filename: string) {
    console.log(`📋 Proxy created for: ${this.filename}`);
  }

  display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

