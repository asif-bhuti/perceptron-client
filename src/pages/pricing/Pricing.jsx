import React from "react";
import { PricingCard, Text } from "../../components";

export const Pricing = () => {
  return (
    <div className="relative z-30 m-8 section flex-col" id="pricing">
      <Text variant="heading" className={"pb-1 mb-8"}>
        Choose Your Package
      </Text>
      <div className="flex w-full h-full">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
};
