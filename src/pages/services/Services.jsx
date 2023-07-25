import React from "react";
import { Text, InfoCard, SlideIn, PopUp } from "../../components";
import { MdWebAsset, MdWeb } from "react-icons/md";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFlutter,
  SiIos,
  SiVuedotjs,
  SiNextdotjs,
  SiAngular,
  SiDjango,
  SiRuby,
  SiLaravel,
  SiPhp,
  SiSemanticweb,
} from "react-icons/si";
import { AiOutlineMobile, AiFillAndroid } from "react-icons/ai";
import { DiHtml5, DiCss3Full, DiJavascript1 } from "react-icons/di";

const staticWebsiteIcons = [
  { Icon: DiHtml5, color: "#E44D26" },
  { Icon: DiCss3Full, color: "#264DE4" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: DiJavascript1, color: "#F0DB4F" },
  { Icon: SiPhp, color: "#777BB4" },
];

const webAppIcons = [
  { Icon: SiNextdotjs, color: "#D1D1D1" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiExpress, color: "#D1D1D1" },
  { Icon: SiReact, color: "#61DBFB" },
  { Icon: SiNodedotjs, color: "#339933" },
];

const mobileAppsIcons = [
  { Icon: SiReact, color: "#61DBFB" },
  { Icon: SiFlutter, color: "#55C0F0" },
  { Icon: SiIos, color: "#D1D1D1" },
  { Icon: AiFillAndroid, color: "#3DDC84" },
];

const saasAppsIcons = [
  { Icon: SiVuedotjs, color: "#4FC08D" },
  { Icon: SiAngular, color: "#DD0031" },
  { Icon: SiDjango, color: "#092E20" },
  { Icon: SiRuby, color: "#CC342D" },
  { Icon: SiLaravel, color: "#FF2D20" },
];

export const Services = () => {
  return (
    <div className="relative z-30 m-8 mobile:m-2 section" id="services">
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        <div className="col-span-2">
          <SlideIn delay={0.8}>
            <Text variant="heading" className={"mobile:text-2xl"}>
              Focused On Your
            </Text>
            <Text variant="title" className={"text-6xl"}>
              Customized Solution
            </Text>
          </SlideIn>
          <SlideIn direction={"left"}>
            <Text className={"mb-8"}>
              With latest technologies at our disposal, get the best solution
              that you deserve.
            </Text>
          </SlideIn>
        </div>
        <PopUp delay={0.1} className="">
          <InfoCard
            Icon={MdWebAsset}
            HeadingText={"Static Websites"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={staticWebsiteIcons}
          />
        </PopUp>
        <PopUp className="">
          <InfoCard
            Icon={MdWeb}
            HeadingText={"Web Applications"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={webAppIcons}
          />
        </PopUp>
        <PopUp delay={0.5} className="">
          <InfoCard
            Icon={AiOutlineMobile}
            HeadingText={"Mobile Applications"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={mobileAppsIcons}
          />
        </PopUp>
        <PopUp delay={0.7} className="">
          <InfoCard
            Icon={SiSemanticweb}
            HeadingText={"SaaS Applications"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={saasAppsIcons}
          />
        </PopUp>
      </div>
    </div>
  );
};
