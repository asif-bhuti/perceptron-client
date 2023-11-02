import React from "react";
import { PopUp } from "../anim/PopUp";

export const Card = ({ children }) => {
  return (
    <PopUp scale={0.05}>
      <div className="group w-full h-full p-0.5 rounded-lg mr-4 bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan border-none hover:scale-105 transition-all ease-in-out">
        <div className="bg-primary-400 w-full h-full rounded-lg p-1 ">
          <div className=" w-full h-full py-4 px-8 rounded-md group-hover:bg-gradient-to-tr from-[#a525fe] via-[#5e7dfe] to-secondary-cyan">
            {children}
          </div>
        </div>
      </div>
    </PopUp>
  );
};
