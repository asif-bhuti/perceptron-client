import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Button, Text, SlideIn } from "../../components";

export const Contact = () => {
  return (
    <div
      className="relative z-30 m-8 section flex-col items-start"
      id="contact"
    >
      <SlideIn direction={"left"} delay={0.1}>
        <Text variant="heading" className={"mb-16"}>
          Contact Us
        </Text>
      </SlideIn>
      <div className="flex w-full justify-between">
        <div className="w-[30%] h-screen">
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

        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="bg-opacity-20 bg-primary-100 h-[40%] w-[40%] rounded-lg p-4"
        >
          <Text variant="title" className={"text-white"}>
            Info
          </Text>
          <div className="flex">
            <FiMail className={"inline mr-2"} size={"40px"} color="white" />
            <Text className={"text-3xl"}>perceptron@gmail.com</Text>
          </div>
          <div className="flex">
            <FiPhoneCall
              className={"inline mr-2"}
              size={"40px"}
              color="white"
            />
            <Text className={"text-3xl"}>+88-018-5998-1836</Text>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
