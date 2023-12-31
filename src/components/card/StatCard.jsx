import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import { Text } from "../Text/Text";

export const StatCard = ({ count = 100, text = "Days Deliver", percent }) => {
  const [animatedCount, setAnimatedCount] = useState(0);

  // Use the useInView hook to determine if the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // This ensures the animation triggers only once
    threshold: 0.2, // Adjust the threshold as needed (0.2 means 20% of the element should be in view)
  });

  useEffect(() => {
    // If the component is in view, start the animation
    if (inView) {
      let startCount = 0;
      const endCount = count;
      const animationDuration = 1000; // Adjust the animation duration as needed
      const totalSteps = 50; // Adjust the number of steps as needed

      const increment = Math.ceil(endCount / totalSteps);

      const timer = setInterval(() => {
        startCount += increment;
        if (startCount >= endCount) {
          clearInterval(timer);
          startCount = endCount;
        }
        setAnimatedCount(startCount);
      }, animationDuration / totalSteps);

      return () => clearInterval(timer);
    }
  }, [inView, count]);

  return (
    <div
      ref={ref}
      className="flex flex-col w-28 h-28 sm:w-36 sm:h-36 p-4 bg-white bg-opacity-20 rounded-md"
    >
      <Text
        variant="heading"
        className={
          "bg-gradient-to-r from-cyan-600 via-cyan-500  to-secondary-cyan bg-clip-text text-transparent text-lg"
        }
      >
        {animatedCount + (percent ? "%" : "")}
      </Text>
      <Text
        variant="title"
        className={"font-normal text-sm sm:text-base 2xl:text-lg text-white"}
      >
        {text}
      </Text>
    </div>
  );
};
