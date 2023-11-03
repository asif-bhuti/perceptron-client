import React from "react";
import { Text } from "../Text/Text";

export const InfoCard = ({ Icon, HeadingText, BodyText }) => {
  return (
    <div className="flex flex-col gap-4 mobile:h-fit mobile:w-[80vw]">
      <div className="flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <Icon className="text-primary-200 w-8 h-8" />
          <Text variant="heading" className={"text-xl mobile:text-sm"}>
            {HeadingText}
          </Text>
        </div>
      </div>
      <p className={"font-lato text-primary-100 3xl:text-xl"}>{BodyText}</p>
    </div>
  );
};
