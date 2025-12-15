import { HomeTheaterFacade } from "./facade";

console.log("=== Facade Pattern ===\n");

const homeTheater = new HomeTheaterFacade();

homeTheater.watchMovie("The Matrix");
homeTheater.endMovie();

