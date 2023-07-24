import React from "react";
import { Text } from "../Text/Text";

export const InfoCard = ({ Icon, HeadingText, BodyText, HeadingIcons }) => {
  return (
    <div className="border-2 border-primary-200 rounded-xl p-4 h-full bg-gradient-to-r hover:from-secondary-pink hover:to-secondary-cyan transition-all hover:p-[14px] hover:border-none">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Icon size={"30px"} className="text-primary-200 mr-1" />
          <Text variant="heading" className={"text-xl"}>
            {HeadingText}
          </Text>
        </div>
        <div className="flex items-center">
          {HeadingIcons.map((item, index) => (
            <item.Icon
              key={index}
              size={"25px"}
              color={item.color}
              className="text-primary-200 mr-1"
            />
          ))}
        </div>
      </div>
      <Text className={"align-middle"}>{BodyText}</Text>
    </div>
  );
};
