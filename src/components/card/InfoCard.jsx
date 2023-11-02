import React from "react";
import { Text } from "../Text/Text";

export const InfoCard = ({ Icon, HeadingText, BodyText }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <Icon size={"1.7rem"} className="text-primary-200 mr-1" />
          <Text variant="heading" className={"text-xl"}>
            {HeadingText}
          </Text>
        </div>
      </div>
      <Text className={"align-middle"}>{BodyText}</Text>
    </div>
  );
};
