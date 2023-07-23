import React from "react";
import { Button } from "../../components";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
        <h3 className="font-krona text-4xl bg-gradient-to-r from-primary-200 via-primary-100 to-primary-200 bg-clip-text text-transparent self-start text-start">
          We Are Solution Oriented
        </h3>
        <h1 className="font-montserrat text-8xl font-bold bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan bg-clip-text text-transparent self-start text-start">
          Tech Agency
        </h1>
        <p className="font-lato text-primary-100 w-[640px]">
          Empowering businesses with innovative web and mobile app solutions for
          the digital age. We craft cutting-edge web and mobile applications to
          drive your digital success.
        </p>
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
