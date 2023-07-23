import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const Button = ({ children, variant }) => {
  return (
    <button
      className={twMerge(
        clsx(
          "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ",
          variant === "primary" &&
            "from-primary-200 via-primary-200 to-primary-100"
        )
      )}
    >
      <span
        className={twMerge(
          clsx(
            "relative px-5 py-2.5 transition-all ease-in duration-75 bg-primary-400 rounded-md group-hover:bg-opacity-0",
            variant === "primary" && "bg-transparent text-primary-400"
          )
        )}
      >
        {children}
      </span>
    </button>
  );
};
