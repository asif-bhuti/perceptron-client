import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Button, Text, SlideIn } from "../../components";
import { MdOutlineLocationOn } from "react-icons/md";

export const Contact = () => {
  return (
    <div
      className={`relative z-30 m-8 mobile:m-4 section flex-col items-start  `}
      id="contact"
    >
      <SlideIn direction={"left"} delay={0.1}>
        <Text
          variant="heading"
          className={"mb-16 text-6xl mobile:mb-4 mobile:text-2xl"}
        >
          Contact Us
        </Text>
      </SlideIn>
      <div className="flex mobile:flex-col w-full justify-between">
        <div className="w-[30%] h-screen mobile:w-full mobile:h-full">
          <SlideIn direction={"left"} delay={0.1} className="input-container">
            <input
              type="text"
              placeholder="Name"
              className="rounded-md w-full bg-primary-300 p-4 text-montserrat text-primary-100 focus:outline-none"
            />
          </SlideIn>
          <SlideIn direction={"left"} delay={0.2} className="input-container">
            <input
              type="text"
              placeholder="E-mail"
              className="rounded-md w-full bg-primary-300 p-4 text-montserrat text-primary-100 focus:outline-none"
            />
          </SlideIn>
          <SlideIn direction={"left"} delay={0.3} className="input-container">
            <input
              placeholder="Message"
              className="rounded-md w-full h-40 bg-primary-300 p-4 text-montserrat text-primary-100 focus:outline-none placeholder:align-text-top"
            />
          </SlideIn>
          <SlideIn direction={"left"} delay={0.4}>
            <Button
              variant={"primary"}
              className={
                "group font-krona hover:from-secondary-pink hover:via-secondary-purple hover:to-secondary-blue transition-all ease-in duration-75 w-full"
              }
              classNameSpan={
                "group-hover:text-white transition-all ease-in duration-75"
              }
            >
              Submit
            </Button>
          </SlideIn>
        </div>

        <div className=" flex flex-col gap-0 bg-gradient-to-tr from-primary-100 via-primary-200 to-primary-100 h-[40%] w-[40%] rounded-lg p-4 mobile:w-full mobile:h-full mobile:mt-8">
          <Text variant="title" className={"text-primary-400 mobile:text-4xl"}>
            Info
          </Text>
          <div className="flex gap-2 justify-center items-center">
            <FiMail className={"inline mr-2 mobile:p-2"} size={"40px"} />
            <Text className={"text-primary-400 text-3xl mobile:text-xl"}>
              perceptron@gmail.com
            </Text>
          </div>
          <div className="flex gap-2 items-center">
            <FiPhoneCall className={"inline mr-2 mobile:p-2"} size={"40px"} />
            <div className="flex flex-col">
              <Text
                className={
                  "text-primary-400 text-3xl mobile:text-xl whitespace-nowrap"
                }
              >
                +88-018-5998-1836
              </Text>
              <Text
                className={
                  "text-primary-400 text-3xl mobile:text-xl whitespace-nowrap"
                }
              >
                +880-176-419-5586
              </Text>
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            <MdOutlineLocationOn
              className={"inline mr-2 mobile:p-2"}
              size={"40px"}
            />
            <Text className={"text-primary-400 text-3xl mobile:text-xl"}>
              DHK, BD
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
