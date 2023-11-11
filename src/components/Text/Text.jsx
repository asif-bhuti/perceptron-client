import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Text = ({ children, className, variant = "body" }) => {
  return (
    <p
      className={twMerge(
        clsx(
          variant === "body" &&
            "font-lato text-primary-100 text-justify w-full text-base sm:text-lg 2xl:text-2xl",
          variant === "title" &&
            `font-montserrat pr-2 pb-2 mb-4 text-5xl sm:text-8xl 2xl:text-[6rem] font-bold bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan bg-clip-text text-transparent self-start text-start `,
          variant === "heading" &&
            `font-krona text-xl sm:text-4xl bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 bg-clip-text text-transparent self-start text-start`
        ),
        className
      )}
    >
      {children}
    </p>
  );
};
