import React, { useEffect, useState } from "react";
import { Text } from "vcc-ui";
import { CarsList } from "./carsList";
import { carsService } from "services";
import { ICar } from "types/cars";

export const Cars = () => {
  const [cars, setCars] = useState<ICar[]>([]);

  useEffect(() => {
    const getCars = async () => {
      const carsData = await carsService.getCars();
      setCars(carsData);
    };
    getCars();
  }, []);

  return (
    <>
      <Text
        extend={{
          textAlign: "center",
        }}
        variant="hillary"
        subStyle="emphasis"
      >
        Volvo Cars
      </Text>
      {cars && <CarsList cars={cars} />}{" "}
    </>
  );
};
