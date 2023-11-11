import React from "react";
import { CustomCarousel, Text } from "../../components";

export const Projects = () => {
  return (
    <div className="section flex-col bg-green-400" id="projects">
      <Text variant="heading" className={"text-4xl mb-8 "}>
        Our Projects
      </Text>
      <CustomCarousel />
    </div>
  );
};
