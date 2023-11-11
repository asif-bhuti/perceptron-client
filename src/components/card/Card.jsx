import React from "react";
import { PopUp } from "../anim/PopUp";

export const Card = ({ children }) => {
  return (
    <PopUp scale={0.05} className={"sm:h-full"}>
      <div className="group h-[200px] w-[340px] rounded-lg border-none bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan p-0.5 transition-all ease-in-out sm:h-full sm:w-full">
        <div className="h-full w-full rounded-lg bg-primary-400 p-1 ">
          <div className=" h-full w-full rounded-md from-[#a525fe] via-[#5e7dfe] to-secondary-cyan p-4 group-hover:bg-gradient-to-tr">
            {children}
          </div>
        </div>
      </div>
    </PopUp>
  );
};
