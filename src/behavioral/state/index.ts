import { AudioPlayer } from "./player";

console.log("=== State Pattern ===\n");

const player = new AudioPlayer();

player.play();
player.play();
player.pause();
player.play();
player.stop();
player.pause();
player.play();

