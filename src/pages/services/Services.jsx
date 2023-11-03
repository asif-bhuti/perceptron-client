import React from "react";
import { Text, InfoCard, SlideIn, PopUp, Card } from "../../components";
import { MdWebAsset, MdWeb } from "react-icons/md";
import { SiSemanticweb } from "react-icons/si";
import { AiOutlineMobile } from "react-icons/ai";

export const Services = () => {
  return (
    <section
      className="relative z-30 m-8 mobile:m-2 section justify-start items-start"
      id="services"
    >
      <div className="flex flex-col gap-10 mobile:gap-2">
        <div>
          <SlideIn delay={0.8}>
            <>
              <Text
                variant="heading"
                className={"mobile:text-2xl 3xl:text-6xl"}
              >
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
        <div className="grid grid-cols-2 grid-rows-3 gap-2 mobile:flex mobile:overflow-x-auto mobile:w-[98vw] mobile:py-4 mobile:px-2 mobile:gap-4 ">
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
