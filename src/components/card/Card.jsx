import React from "react";
import { PopUp } from "../anim/PopUp";

export const Card = ({ children }) => {
  return (
    <PopUp scale={0.05}>
      <div className="group w-full h-[200px] mobile:h-full p-0.5 rounded-lg bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan border-none transition-all ease-in-out">
        <div className="bg-primary-400 w-full h-full rounded-lg p-1 ">
          <div className=" w-full h-full p-4 rounded-md group-hover:bg-gradient-to-tr from-[#a525fe] via-[#5e7dfe] to-secondary-cyan">
            {children}
          </div>
        </div>
      </div>
    </PopUp>
  );
};
