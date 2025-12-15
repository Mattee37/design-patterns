import type { Vehicle } from "./types";
import { Car, Motorcycle, Truck } from "./vehicles";

type VehicleType = "car" | "motorcycle" | "truck";

export function createVehicle(type: VehicleType): Vehicle {
  switch (type) {
    case "car":
      return new Car();
    case "motorcycle":
      return new Motorcycle();
    case "truck":
      return new Truck();
  }
}

