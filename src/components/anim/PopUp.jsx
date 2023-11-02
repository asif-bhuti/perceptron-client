import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const PopUp = ({ delay = 0.3, children, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: [null, 0.5, 0.99] }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{
        duration: 0.3,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
