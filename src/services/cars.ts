import { ICar } from "types/cars";

const baseUrl = window.location.origin;

export const carsService = {
  getCars: async () => {
    try {
      const response = await fetch(`${baseUrl}/api/cars.json`);
      return await response.json();
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  getCar: async (carId: string) => {
    try {
      const cars: ICar[] = await carsService.getCars();
      return cars.find((car) => car.id === carId);
    } catch (err) {
      console.log(err);
      return {};
    }
  },
};
