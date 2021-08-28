import React, { useState } from "react";
import Slider from "react-slick";
import { ICar } from "types/cars";
import { Flex, Click, Spacer, useTheme } from "vcc-ui";
import chevronCircled from "assets/images/chevron-circled.svg";
import { CarInfo } from "components/carInfo";
import { sliderConfig } from "./sliderConfig";
import { CarsContainer } from "./style";

export const CarsList = (props: ICarsListProps) => {
  const { cars } = props;
  const theme = useTheme();
  let slider: Slider | null;
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePreviousSlide = () => {
    slider?.slickPrev();
  };
  const handleNextSlide = () => {
    slider?.slickNext();
  };

  const sliderConfigs = {
    ...sliderConfig,
    afterChange: (current: number) => {
      setActiveSlide(current);
    },
  };

  return (
    <CarsContainer>
      <Slider ref={(slide) => (slider = slide)} {...sliderConfigs}>
        {cars?.map((car) => (
          <CarInfo car={car} key={car.id} />
        ))}
      </Slider>
      <Flex
        extend={{
          [theme.breakpoints.onlyS]: {
            display: "none",
          },
        }}
        className="slider-buttons"
      >
        <Click
          className="button"
          onClick={handlePreviousSlide}
          disabled={activeSlide === 0}
        >
          <img src={chevronCircled} alt="Previous Slide" />
        </Click>
        <Spacer />
        <Click
          className="button"
          onClick={handleNextSlide}
          disabled={activeSlide === cars?.length / 2}
        >
          <img src={chevronCircled} alt="Next Slide" />
        </Click>
      </Flex>
    </CarsContainer>
  );
};

interface ICarsListProps {
  cars: ICar[];
}
