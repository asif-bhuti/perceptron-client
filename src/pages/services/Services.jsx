import React from "react";
import { Text, InfoCard, SlideIn, PopUp, Card } from "../../components";
import { MdWebAsset, MdWeb } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import { AiOutlineMobile } from "react-icons/ai";

export const Services = () => {
  return (
    <div className="relative z-30 m-8 mobile:m-2 section" id="services">
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        <div className="col-span-2">
          <SlideIn delay={0.8}>
            <>
              <Text variant="heading" className={"mobile:text-2xl"}>
                Focused On Your
              </Text>
              <Text variant="title" className={"text-6xl"}>
                Customized Solution
              </Text>
            </>
          </SlideIn>
          <SlideIn direction={"left"}>
            <Text className={"mb-8"}>
              With latest technologies at our disposal, get the best solution
              that you deserve.
            </Text>
          </SlideIn>
        </div>
        <PopUp delay={0.1} className="">
          <Card>
            <InfoCard
              Icon={MdWebAsset}
              HeadingText={"Static Websites"}
              BodyText={
                "Websites for Landing Page, Portfolio, Product show-case etc."
              }
            />
          </Card>
        </PopUp>
        <PopUp className="">
          <Card>
            <InfoCard
              Icon={MdWeb}
              HeadingText={"Web Applications"}
              BodyText={
                "Websites for Landing Page, Portfolio, Product show-case etc."
              }
            />
          </Card>
        </PopUp>
        <PopUp delay={0.5} className="">
          <Card>
            <InfoCard
              Icon={AiOutlineMobile}
              HeadingText={"Mobile Applications"}
              BodyText={
                "Websites for Landing Page, Portfolio, Product show-case etc."
              }
            />
          </Card>
        </PopUp>
        <PopUp delay={0.7} className="">
          <Card>
            <InfoCard
              Icon={SiSemanticweb}
              HeadingText={"SaaS Applications"}
              BodyText={
                "Websites for Landing Page, Portfolio, Product show-case etc."
              }
            />
          </Card>
        </PopUp>
      </div>
    </div>
  );
};
