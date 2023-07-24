import React from "react";
import { Text } from "../Text/Text";
import { PopUp } from "../anim/PopUp";

export const PricingCard = () => {
  return (
    <PopUp className={"mr-1"}>
      <div className="group w-full h-full p-0.5 rounded-lg mr-4 bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan border-none hover:scale-105 transition-all ease-in-out">
        <div className="bg-primary-400 w-full h-full rounded-lg p-1 ">
          <div className=" w-full h-full py-4 px-8 rounded-md group-hover:bg-gradient-to-tr from-[#a525fe] via-[#5e7dfe] to-secondary-cyan">
            <div>
              <Text
                variant="title"
                className={"text-2xl group-hover:text-white"}
              >
                Package Name
              </Text>
            </div>
            <div>
              <Text className="w-[90%]">
                Description Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Quasi unde mollitia, doloribus facilis ad praesentium hic
                veniam quos ipsum ipsa neque, velit quaerat dolore molestias?
                Error incidunt pariatur fuga adipisci.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </PopUp>
  );
};
