import React from "react";
import { cw } from "../../utils/cw";

export const Button = ({
  children,
  variant,
  props,
  className,
  classNameSpan,
}) => {
  return (
    <button
      {...props}
      className={cw(
        "before:content group relative m-0 inline-block cursor-pointer select-none appearance-none  whitespace-nowrap rounded-md bg-primary-100 px-8 py-4 text-center align-baseline text-sm font-medium uppercase leading-[1em] tracking-[0] text-primary-400 no-underline opacity-100 outline-[0] [transition:opacity_300ms_cubic-bezier(0.694,_0,_0.335,_1),_background-color_100ms_cubic-bezier(0.694,_0,_0.335,_1),_color_100ms_cubic-bezier(0.694,_0,_0.335,_1)] before:absolute before:left-[0] before:top-[0] before:h-full before:w-full before:animate-[opacityFallbackOut_0.5s_step-end_forwards] before:rounded-md before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:[backface-visibility:hidden] before:[clip-path:polygon(-1%_0,_0_0,_-25%_100%,_-1%_100%)] before:[transform:translateZ(0)] before:[transition:clip-path_0.5s_cubic-bezier(0.165,_0.84,_0.44,_1),_-webkit-clip-path_0.5s_cubic-bezier(0.165,_0.84,_0.44,_1)] after:bg-[#ffffff] before:hover:animate-[opacityFallbackIn_0s_step-start_forwards] before:hover:[clip-path:polygon(0_0,_101%_0,_101%_101%,_0_101%)]",
        {
          "rounded-md border bg-opacity-0 before:from-primary-100 before:via-primary-200 before:to-primary-100":
            variant === "secondary",
        },
        className,
      )}
    >
      <span
        className={cw(
          "relative group-hover:text-primary-100",
          {
            "text-primary-100 group-hover:text-primary-400":
              variant === "secondary",
          },
          classNameSpan,
        )}
      >
        {children}
      </span>
    </button>
  );
};
