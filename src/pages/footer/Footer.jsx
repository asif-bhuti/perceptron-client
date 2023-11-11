import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

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

export const Footer = () => {
  const SocialMediaIcon = ({ Icon, link, size = "30px", color = "fff" }) => (
    <div className="py-2">
      <a href={link} target="_blank" rel="noreferrer">
        <Icon
          size={size}
          color={color}
          className="transition-all  duration-75 ease-in hover:scale-110 hover:cursor-pointer"
        />
      </a>
    </div>
  );

  return (
    <div className="flex h-fit w-full flex-col items-center justify-center bg-primary-400 p-10">
      <img src="/logo/logo-bNw.png" alt="Perceptron Logo" className="w-64" />
      <p className="text-lg text-white">Copyright © Perceptron, Org.</p>
      <div className="flex gap-4">
        {socialMediaIcons.map((item, index) => (
          <SocialMediaIcon Icon={item.Icon} key={index} link={item.link} />
        ))}
      </div>
    </div>
  );
};
