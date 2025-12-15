export class TV {
  on(): void {
    console.log("📺 TV is ON");
  }

  off(): void {
    console.log("📺 TV is OFF");
  }
}

export class SoundSystem {
  on(): void {
    console.log("🔊 Sound system is ON");
  }

  off(): void {
    console.log("🔊 Sound system is OFF");
  }

  setVolume(level: number): void {
    console.log(`🔊 Volume set to ${level}`);
  }
}

export class StreamingPlayer {
  on(): void {
    console.log("🎬 Streaming player is ON");
  }

  off(): void {
    console.log("🎬 Streaming player is OFF");
  }

  play(movie: string): void {
    console.log(`🎬 Playing "${movie}"`);
  }

  stop(): void {
    console.log("🎬 Stopped playback");
  }
}

export class Lights {
  dim(level: number): void {
    console.log(`💡 Lights dimmed to ${level}%`);
  }

  on(): void {
    console.log("💡 Lights are ON");
  }
}

