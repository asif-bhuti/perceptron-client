import React from "react";
import { Button } from "../../components";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { Text } from "../../components";
import { motion } from "framer-motion";

const socialMediaIcons = [
  { Icon: AiFillGithub, link: "https://github.com/perceptronbd" },
  {
    Icon: AiFillLinkedin,
    link: "https://www.linkedin.com/company/perceptron-bd/",
  },
  {
    Icon: AiFillFacebook,
    link: "https://www.facebook.com/profile.php?id=100090958665980",
  },
];

export const Home = () => {
  const SocialMediaIcon = ({
    Icon,
    link,
    delay,
    size = "35px",
    color = "fff",
  }) => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ from: 0, duration: 1, delay: delay }}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <Icon
          size={size}
          color={color}
          className="transition-all duration-75 ease-in hover:scale-110 hover:cursor-pointer"
        />
      </a>
    </motion.div>
  );

  return (
    <div className="section" id="home">
      <div className="flex  w-full flex-col">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col"
        >
          <Text variant="heading">We Are Solution Oriented</Text>
          <Text variant="title">Tech Agency</Text>
          <Text className={"md:w-1/2"}>
            Empowering businesses with innovative web and mobile app solutions
            for the digital age. We craft cutting-edge web and mobile
            applications to drive your digital success.
          </Text>
        </motion.div>
        <span className="my-4"></span>
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className="flex gap-2"
          >
            <Button>Hire Us!</Button>

            <Button variant={"secondary"}>How We Work</Button>
          </motion.div>
        </>
        <span className="my-2"></span>
        <div className="flex gap-2">
          {socialMediaIcons.map((item, index) => (
            <SocialMediaIcon
              Icon={item.Icon}
              key={index}
              link={item.link}
              delay={index - 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
