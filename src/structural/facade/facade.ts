import { TV, SoundSystem, StreamingPlayer, Lights } from "./subsystems";

export class HomeTheaterFacade {
  private tv = new TV();
  private sound = new SoundSystem();
  private player = new StreamingPlayer();
  private lights = new Lights();

  watchMovie(movie: string): void {
    console.log("🎥 Getting ready to watch a movie...\n");
    this.lights.dim(10);
    this.tv.on();
    this.sound.on();
    this.sound.setVolume(50);
    this.player.on();
    this.player.play(movie);
  }

  endMovie(): void {
    console.log("\n🎥 Shutting down the theater...\n");
    this.player.stop();
    this.player.off();
    this.sound.off();
    this.tv.off();
    this.lights.on();
  }
}

