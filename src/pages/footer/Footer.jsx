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
          className="hover:cursor-pointer hover:scale-110 transition-all ease-in duration-75"
        />
      </a>
    </div>
  );

  return (
    <div className="w-full h-fit p-10 bg-primary-400 flex flex-col justify-center items-center">
      <img src="/logo/logo-bNw.png" alt="Perceptron Logo" className="w-64" />
      <p className="text-white text-lg">Copyright © Perceptron, Org.</p>
      <div className="flex gap-4">
        {socialMediaIcons.map((item, index) => (
          <SocialMediaIcon Icon={item.Icon} key={index} link={item.link} />
        ))}
      </div>
    </div>
  );
};
