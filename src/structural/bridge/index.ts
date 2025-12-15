import { TV, Radio } from "./devices";
import { RemoteControl } from "./remote";

console.log("=== Bridge Pattern ===\n");

const tv = new TV();
const tvRemote = new RemoteControl(tv);

console.log("Controlling TV:");
tvRemote.togglePower();
tvRemote.volumeUp();
tvRemote.volumeUp();
tvRemote.togglePower();

console.log("\nControlling Radio:");
const radio = new Radio();
const radioRemote = new RemoteControl(radio);

radioRemote.togglePower();
radioRemote.volumeDown();

