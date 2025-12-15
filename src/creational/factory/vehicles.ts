import type { Vehicle } from "./types";

export class Car implements Vehicle {
  type = "Car";
  wheels = 4;

  drive(): void {
    console.log("Driving a car 🚗");
  }
}

export class Motorcycle implements Vehicle {
  type = "Motorcycle";
  wheels = 2;

  drive(): void {
    console.log("Riding a motorcycle 🏍️");
  }
}

export class Truck implements Vehicle {
  type = "Truck";
  wheels = 6;

  drive(): void {
    console.log("Driving a truck 🚛");
  }
}

