import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cw = (...classes) => twMerge(clsx(classes));
