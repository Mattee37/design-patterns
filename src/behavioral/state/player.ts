import type { State, MusicPlayer } from "./types";

class StoppedState implements State {
  play(player: MusicPlayer): void {
    console.log("▶️  Starting playback");
    player.setState(new PlayingState());
  }

  pause(player: MusicPlayer): void {
    console.log("⏹️  Already stopped");
  }

  stop(player: MusicPlayer): void {
    console.log("⏹️  Already stopped");
  }
}

class PlayingState implements State {
  play(player: MusicPlayer): void {
    console.log("▶️  Already playing");
  }

  pause(player: MusicPlayer): void {
    console.log("⏸️  Pausing");
    player.setState(new PausedState());
  }

  stop(player: MusicPlayer): void {
    console.log("⏹️  Stopping");
    player.setState(new StoppedState());
  }
}

class PausedState implements State {
  play(player: MusicPlayer): void {
    console.log("▶️  Resuming playback");
    player.setState(new PlayingState());
  }

  pause(player: MusicPlayer): void {
    console.log("⏸️  Already paused");
  }

  stop(player: MusicPlayer): void {
    console.log("⏹️  Stopping");
    player.setState(new StoppedState());
  }
}

export class AudioPlayer implements MusicPlayer {
  private state: State = new StoppedState();

  setState(state: State): void {
    this.state = state;
  }

  play(): void {
    this.state.play(this);
  }

  pause(): void {
    this.state.pause(this);
  }

  stop(): void {
    this.state.stop(this);
  }
}

