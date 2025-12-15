import { OldMp3Player } from "./legacy-player";
import { AudioPlayerAdapter } from "./adapter";
import type { MediaPlayer } from "./types";

console.log("=== Adapter Pattern ===\n");

const legacyPlayer = new OldMp3Player();
const adapter: MediaPlayer = new AudioPlayerAdapter(legacyPlayer);

console.log("Using the new MediaPlayer interface:");
adapter.play("song.mp3");
adapter.play("track.mp3");

