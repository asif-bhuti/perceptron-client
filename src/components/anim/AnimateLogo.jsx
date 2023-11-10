import React from "react";
import { motion } from "framer-motion";

export const AnimateLogo = () => {
  return (
    <div className="w-full h-screen bg-primary-400 flex justify-center items-center mobile:w-screen">
      <motion.div
        initial={{ scale: 1 }} // The initial scale of the element
        animate={{ scale: [1, 1.2, 1] }} // An array of scale values to animate through
        transition={{
          duration: 2, // Total duration for one pulsation cycle
          repeat: Infinity, // Repeat the animation indefinitely
          repeatType: "reverse", // Reverse the animation after each cycle
          ease: "easeInOut", // Easing function to control the animation's smoothness
        }}
        className="flex w-2/3 justify-center items-center"
      >
        <img src="/logo_nav.png" alt="" />
      </motion.div>
    </div>
  );
};
