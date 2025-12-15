import { createVehicle } from "./factory";

console.log("=== Factory Pattern ===\n");

const car = createVehicle("car");
const motorcycle = createVehicle("motorcycle");
const truck = createVehicle("truck");

car.drive();
motorcycle.drive();
truck.drive();

console.log(`\nCar has ${car.wheels} wheels`);
console.log(`Motorcycle has ${motorcycle.wheels} wheels`);
console.log(`Truck has ${truck.wheels} wheels`);

