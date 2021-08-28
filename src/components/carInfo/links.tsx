import React from "react";
import { Link, Flex } from "vcc-ui";
import { ICar } from "types/cars";

export const CarLinks = (props: ICarLinksProps) => {
  const { car, hideLearnButton = false, hideShopButton = false } = props;
  const { id, modelName } = car;

  return (
    <Flex
      extend={{
        flexDirection: "row",
        justifyContent: "center",
      }}
      className="links"
    >
      {(hideLearnButton || hideShopButton) && (
        <Link href={`/`} arrow="right" aria-label="Home">
          Home
        </Link>
      )}
      {!hideLearnButton && (
        <Link
          href={`/learn/${id}`}
          arrow="right"
          aria-label={`Learn about ${modelName}`}
        >
          Learn
        </Link>
      )}
      {!hideShopButton && (
        <Link
          href={`/shop/${id}`}
          arrow="right"
          aria-label={`Shop ${modelName}`}
        >
          Shop
        </Link>
      )}
    </Flex>
  );
};

interface ICarLinksProps {
  car: ICar;
  hideLearnButton?: boolean;
  hideShopButton?: boolean;
}
