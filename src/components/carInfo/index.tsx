import React from "react";
import { Text, Flex, Block } from "vcc-ui";
import { ICar } from "types/cars";
import { CarInfoContainer } from "./style";
import { CarLinks } from "./links";

export const CarInfo = (props: ICarInfoProps) => {
  const { car, hideLearnButton, hideShopButton } = props;
  const { id, modelName, bodyType, modelType, imageUrl } = car;

  return (
    <CarInfoContainer>
      <Flex
        as="a"
        href={`/learn/${id}`}
        className="car-info-link"
        aria-label={`Learn about ${modelName}`}
      >
        <Flex className="car-info-header">
          <Text
            subStyle="emphasis"
            className="body-type"
            data-testid="body-type"
          >
            {bodyType}
          </Text>
          <Flex as="h4" className="model-info">
            <Text as="span" className="model-name" data-testid="model-name">
              {modelName}{" "}
            </Text>
            <Text as="span" className="model-type" data-testid="model-type">
              {modelType}
            </Text>
          </Flex>
        </Flex>
        <Flex className="car-image">
          <Block as="picture" className="image-container">
            <img src={imageUrl} alt={modelName} />
          </Block>
        </Flex>
      </Flex>
      <CarLinks
        car={car}
        hideLearnButton={hideLearnButton}
        hideShopButton={hideShopButton}
      />
    </CarInfoContainer>
  );
};

interface ICarInfoProps {
  car: ICar;
  hideLearnButton?: boolean;
  hideShopButton?: boolean;
}
