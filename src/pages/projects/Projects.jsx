import React from "react";
import { Text } from "../../components";

export const Projects = () => {
  return (
    <div className="relative z-30 m-8 section" id="projects">
      <Text variant="heading" className={"text-4xl mb-8"}>
        Our Projects
      </Text>
      <div className="flex">
        <div className="relative mr-8 inline-flex items-center justify-center p-1 h-[450px] w-[680px] bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan rounded-xl">
          <div className="w-full h-full px-5 py-2.5 transition-all ease-in duration-75 bg-primary-400 rounded-xl "></div>
        </div>
        <div>
          <Text variant="heading" className={"text-3xl"}>
            Pluto 2023
          </Text>
        </div>
      </div>
    </div>
  );
};
