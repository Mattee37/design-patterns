import { File, Folder } from "./file-system";

console.log("=== Composite Pattern ===\n");

const root = new Folder("root");
const documents = new Folder("documents");
const images = new Folder("images");

documents.add(new File("resume.pdf", 120));
documents.add(new File("notes.txt", 5));

images.add(new File("photo.jpg", 2500));
images.add(new File("icon.png", 15));

root.add(documents);
root.add(images);
root.add(new File("readme.md", 2));

root.print();

console.log(`\nTotal size: ${root.getSize()}KB`);

