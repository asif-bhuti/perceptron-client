import React from "react";
import { Button } from "../../components";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Text } from "../../components";
import { motion } from "framer-motion";

const socialMediaIcons = [
  { Icon: AiFillGithub, link: "https://www.github.com/" },
  { Icon: AiFillLinkedin, link: "https://www.linkedin.com/" },
  { Icon: AiOutlineTwitter, link: "https://www.twitter.com/" },
];

export const Home = () => {
  const SocialMediaIcon = ({ Icon, link, size = "32px", color = "fff" }) => (
    <motion.div animate={{ rotate: 360 }} transition={{ from: 0, duration: 1 }}>
      <Link to={link}>
        <Icon
          size={size}
          color={color}
          className="mr-4 opacity-60 hover:opacity-100 transition-all ease-in duration-75"
        />
      </Link>
    </motion.div>
  );

  return (
    <div className=" m-8 mobile:m-2 section" id="home">
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col"
        >
          <Text variant="heading">We Are Solution Oriented</Text>
          <Text variant="title">Tech Agency</Text>
          <Text>
            Empowering businesses with innovative web and mobile app solutions
            for the digital age. We craft cutting-edge web and mobile
            applications to drive your digital success.
          </Text>
        </motion.div>
        <span className="my-4"></span>
        <div className="flex">
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
          >
            <Button variant={"primary"}>Hire Us!</Button>

            <Button>How We Work</Button>
          </motion.div>
        </div>
        <span className="my-2"></span>
        <div className="flex">
          {socialMediaIcons.map((item, index) => (
            <SocialMediaIcon Icon={item.Icon} key={index} link={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
};
