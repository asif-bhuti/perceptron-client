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
      className="text-2xl font-semibold flex justify-center items-center h-16 w-full cursor-pointer text-white"
    >
      <Link to={to} smooth={true} onClick={toggle}>
        {name}
      </Link>
    </motion.li>
  );
};
