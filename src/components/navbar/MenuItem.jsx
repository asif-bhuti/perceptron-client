import * as React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ to, name, toggle }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-16 w-full cursor-pointer items-center justify-center text-2xl font-semibold text-white"
    >
      <Link to={to} smooth={true} onClick={toggle}>
        {name}
      </Link>
    </motion.li>
  );
};
