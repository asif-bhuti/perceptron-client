import React from "react";
import { motion } from "framer-motion";

export const AnimateLogo = () => {
  return (
    <div className="mobile:w-screen flex h-screen w-full items-center justify-center bg-primary-400">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="flex w-2/3 items-center justify-center"
      >
        <img src="/logo_nav.png" alt="" />
      </motion.div>
    </div>
  );
};
