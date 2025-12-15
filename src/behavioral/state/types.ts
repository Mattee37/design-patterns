export interface State {
  play(player: MusicPlayer): void;
  pause(player: MusicPlayer): void;
  stop(player: MusicPlayer): void;
}

export interface MusicPlayer {
  setState(state: State): void;
  play(): void;
  pause(): void;
  stop(): void;
}

