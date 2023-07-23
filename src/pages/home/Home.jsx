import React from "react";
import { Button } from "../../components";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Text } from "../../components";

const socialMediaIcons = [
  { Icon: AiFillGithub, link: "https://www.github.com/" },
  { Icon: AiFillLinkedin, link: "https://www.linkedin.com/" },
  { Icon: AiOutlineTwitter, link: "https://www.twitter.com/" },
];

export const Home = () => {
  const SocialMediaIcon = ({ Icon, link, size = "32px", color = "fff" }) => (
    <NavLink to={link}>
      <Icon
        size={size}
        color={color}
        className="mr-4 opacity-60 hover:opacity-100 transition-all ease-in duration-75"
      />
    </NavLink>
  );

  return (
    <div
      className="relative z-30 m-8
    "
    >
      <div className="flex flex-col">
        <Text variant="heading">We Are Solution Oriented</Text>
        <Text variant="title" size="8xl">
          Tech Agency
        </Text>
        <Text>
          Empowering businesses with innovative web and mobile app solutions for
          the digital age. We craft cutting-edge web and mobile applications to
          drive your digital success.
        </Text>
        <span className="my-4"></span>
        <div className="flex">
          <Button variant={"primary"}>Hire Us!</Button>
          <Button>How We Work</Button>
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
