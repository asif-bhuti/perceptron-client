import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SlideIn = ({ delay = 0.3, direction, children, className }) => {
  const axis = direction === "left" ? -100 : 100;
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: axis }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : axis }}
      transition={{ duration: 0.6, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
