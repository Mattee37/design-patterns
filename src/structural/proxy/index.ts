import { ImageProxy } from "./proxy";

console.log("=== Proxy Pattern ===\n");

console.log("Creating image proxies (no loading yet):\n");

const image1 = new ImageProxy("photo1.jpg");
const image2 = new ImageProxy("photo2.jpg");
const image3 = new ImageProxy("photo3.jpg");

console.log("\nDisplaying image1 (loads now):");
image1.display();

console.log("\nDisplaying image1 again (already loaded):");
image1.display();

console.log("\nDisplaying image2 (loads now):");
image2.display();

console.log("\n(image3 was never displayed, so never loaded)");

