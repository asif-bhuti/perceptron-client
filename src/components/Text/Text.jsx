import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Text = ({ children, className, variant = "body" }) => {
  return (
    <p
      className={twMerge(
        clsx(
          variant === "body" &&
            "w-full text-justify font-lato text-base text-primary-100 sm:text-lg 2xl:text-2xl",
          variant === "title" &&
            `mb-4  self-start bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan bg-clip-text pb-2 pr-2 text-start font-montserrat text-5xl font-bold text-transparent sm:text-8xl 2xl:text-[6rem] `,
          variant === "heading" &&
            `self-start bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 bg-clip-text text-start font-krona text-xl text-transparent sm:text-4xl`,
        ),
        className,
      )}
    >
      {children}
    </p>
  );
};
