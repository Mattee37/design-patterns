export interface MediaPlayer {
  play(filename: string): void;
}

export interface LegacyAudioPlayer {
  playMp3(filename: string): void;
}

