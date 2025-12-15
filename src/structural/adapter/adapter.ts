import type { MediaPlayer, LegacyAudioPlayer } from "./types";

export class AudioPlayerAdapter implements MediaPlayer {
  constructor(private legacyPlayer: LegacyAudioPlayer) {}

  play(filename: string): void {
    this.legacyPlayer.playMp3(filename);
  }
}

