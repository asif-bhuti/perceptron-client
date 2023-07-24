import React from "react";
import { CustomCarousel, Text } from "../../components";

export const Projects = () => {
  return (
    <div
      className="relative z-30 m-8 section flex-col items-start"
      id="projects"
    >
      <Text variant="heading" className={"text-4xl mb-8"}>
        Our Projects
      </Text>
      <CustomCarousel />
    </div>
  );
};
