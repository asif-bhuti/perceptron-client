import React from "react";
import { MdWebAsset, MdWeb } from "react-icons/md";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFlutter,
  SiIos,
  SiSemanticweb,
} from "react-icons/si";
import { AiOutlineMobile, AiFillAndroid } from "react-icons/ai";
import { DiHtml5, DiCss3Full, DiJavascript1 } from "react-icons/di";
import { Text, InfoCard } from "../../components";

const staticWebsiteIcons = [
  { Icon: DiHtml5, color: "#E44D26" },
  { Icon: DiCss3Full, color: "#264DE4" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: DiJavascript1, color: "#F0DB4F" },
];

const webAppIcons = [
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
  { Icon: SiReact, color: "#61DBFB" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: DiJavascript1, color: "#F0DB4F" },
];

export const Services = () => {
  return (
    <div className="relative z-30 m-8 section" id="services">
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        <div className="col-span-2">
          <Text variant="heading">Focused On Your</Text>
          <Text variant="title" className={"text-6xl"}>
            Customized Solution
          </Text>
          <Text className={"mb-8"}>
            With latest technologies at our disposal, get the best solution that
            you deserve.
          </Text>
        </div>
        <div className="grid-cols-1">
          <InfoCard
            Icon={MdWebAsset}
            HeadingText={"Static Websites"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={staticWebsiteIcons}
          />
        </div>
        <div className="grid-cols-1">
          <InfoCard
            Icon={MdWeb}
            HeadingText={"Web Applications"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={webAppIcons}
          />
        </div>
        <div className="grid-cols-1 ">
          {" "}
          <InfoCard
            Icon={AiOutlineMobile}
            HeadingText={"Mobile Applications"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={mobileAppsIcons}
          />
        </div>
        <div className="grid-cols-1 ">
          {" "}
          <InfoCard
            Icon={SiSemanticweb}
            HeadingText={"SaaS Applications"}
            BodyText={
              "Websites for Landing Page, Portfolio, Product show-case etc."
            }
            HeadingIcons={saasAppsIcons}
          />
        </div>
      </div>
    </div>
  );
};
