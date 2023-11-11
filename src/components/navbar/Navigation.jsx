import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ toggle, isOpen }) => {
  return (
    <motion.ul
      transition={{ duration: 0.3 }}
      variants={variants}
      className={`mobile:left-0 mobile:w-[100vw]  fixed right-1 top-12 h-[90%] w-[98%] rounded-lg p-2 ${
        isOpen ? "bg-primary-400 bg-opacity-80" : "hidden"
      } `}
    >
      <MenuItem to={"home"} name={"Home"} toggle={toggle} />
      <MenuItem to={"services"} name={"Services"} toggle={toggle} />
      <MenuItem to={"projects"} name={"Projects"} toggle={toggle} />
      <MenuItem to={"pricing"} name={"Pricing"} toggle={toggle} />
      <MenuItem to={"contact"} name={"Contact"} toggle={toggle} />
    </motion.ul>
  );
};
