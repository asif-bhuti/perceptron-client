import React from "react";
import { CustomCarousel, Text } from "../../components";

export const Projects = () => {
  return (
    <div
      className="relative z-30 m-8 mobile:m-2 section flex-col items-start"
      id="projects"
    >
      <Text
        variant="heading"
        className={"text-4xl mb-8 mobile:mb-4 mobile:text-4xl 3xl:text-6xl"}
      >
        Our Projects
      </Text>
      <CustomCarousel />
    </div>
  );
};
