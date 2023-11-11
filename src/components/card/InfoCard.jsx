import React from "react";
import { Text } from "../Text/Text";

export const InfoCard = ({ Icon, HeadingText, BodyText }) => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Icon className="h-8 w-8 text-primary-200" />
          <Text variant="heading" className={"mobile:text-sm text-xl"}>
            {HeadingText}
          </Text>
        </div>
      </div>
      <p className={"font-lato text-primary-100 3xl:text-xl"}>{BodyText}</p>
    </div>
  );
};
