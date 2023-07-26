import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Text = ({ children, className, variant = "body" }) => {
  return (
    <p
      className={twMerge(
        clsx(
          variant === "body" &&
            "font-lato text-primary-100 w-[640px] mobile:w-[95%]",
          variant === "title" &&
            `font-montserrat pr-2 pb-2 text-8xl font-bold bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan bg-clip-text text-transparent self-start text-start mobile:text-5xl`,
          variant === "heading" &&
            `font-krona text-4xl mobile:text-xl bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 bg-clip-text text-transparent self-start text-start`
        ),
        className
      )}
    >
      {children}
    </p>
  );
};
