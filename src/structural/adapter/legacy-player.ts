import type { LegacyAudioPlayer } from "./types";

export class OldMp3Player implements LegacyAudioPlayer {
  playMp3(filename: string): void {
    console.log(`🎵 [Legacy Player] Playing MP3: ${filename}`);
  }
}

