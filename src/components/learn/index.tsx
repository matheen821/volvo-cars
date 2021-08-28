import React, { useEffect, useState } from "react";
import { Text } from "vcc-ui";
import { CarInfo } from "components/carInfo";
import { carsService } from "services";
import { ICar } from "types/cars";
import { useParams } from "react-router-dom";

export const Learn = () => {
  let params = useParams<{ id: string }>();
  let carInfo = {} as ICar;
  const [car, setCar] = useState<ICar>(carInfo);

  useEffect(() => {
    const getCars = async () => {
      const carData: any = await carsService.getCar(params.id);
      setCar(carData);
    };
    getCars();
  }, [params.id]);

  return (
    <>
      <Text
        extend={{ textAlign: "center" }}
        variant="hillary"
        subStyle="emphasis"
      >
        Learn About {car.modelName}
      </Text>
      {car?.id && <CarInfo car={car} hideLearnButton={true} />}
    </>
  );
};
