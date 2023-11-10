import React from "react";
import { Text, InfoCard, SlideIn, PopUp, Card } from "../../components";
import { MdWebAsset, MdWeb } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import { AiOutlineMobile } from "react-icons/ai";

export const Services = () => {
  return (
    <section className="section justify-start items-start" id="services">
      <div className="flex flex-col gap-2">
        <>
          <SlideIn delay={0.8}>
            <>
              <Text variant="heading">Focused On Your</Text>
              <Text variant="title" className={"sm:text-6xl"}>
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
        </>
        <div className="sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-2 flex flex-col overflow-y-auto h-[435px] sm:w-full  gap-4">
          <PopUp delay={0.1} className="">
            <Card>
              <InfoCard
                Icon={MdWebAsset}
                HeadingText={"Static Websites"}
                BodyText={
                  "Our static websites are fast to create, lightning-fast, and ensure a seamless user experience, ideal for showcasing your business or personal portfolio."
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
                  "Our web apps are what you need. Accessible from any browser, they provide a dynamic, interactive user experience, perfect for online services."
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
                  "Our mobile apps run seamlessly on all devices, providing rich, interactive, personalized experiences for businesses to engage customers."
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
                  "Our SaaS apps are centrally hosted, accessible from anywhere, easy to use, scalable, and installation-free. Ideal for cost-effective business solutions."
                }
              />
            </Card>
          </PopUp>
        </div>
      </div>
    </section>
  );
};
