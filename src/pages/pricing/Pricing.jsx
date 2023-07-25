import React from "react";
import { PricingCard, Text } from "../../components";

export const Pricing = () => {
  return (
    <div className="relative z-30 m-8 mobile:m-4 section flex-col" id="pricing">
      <Text variant="heading" className={"pb-1 mb-8 mobile:text-2xl"}>
        Choose Your Package
      </Text>
      <div className="flex mobile:flex-col w-full h-full">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
};
