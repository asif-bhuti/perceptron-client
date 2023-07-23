import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const Text = ({
  children,
  className,
  variant = "body",
  size = "4xl",
}) => {
  return (
    <p
      className={twMerge(
        clsx(variant === "body" && "font-lato text-primary-100 w-[640px]"),
        variant === "title" &&
          `font-montserrat pr-2 pb-2 text-${size} font-bold bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan bg-clip-text text-transparent self-start text-start`,
        variant === "heading" &&
          `font-krona text-${size} bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 bg-clip-text text-transparent self-start text-start`,
        className
      )}
    >
      {children}
    </p>
  );
};
