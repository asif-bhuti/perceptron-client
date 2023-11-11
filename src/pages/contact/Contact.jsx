import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Button, Text, SlideIn } from "../../components";
import { MdOutlineLocationOn } from "react-icons/md";

export const Contact = () => {
  return (
    <div className={`section  flex-col items-start pt-8`} id="contact">
      <SlideIn direction={"left"} delay={0.1}>
        <Text
          variant="heading"
          className={"mb-4 text-2xl sm:mb-16 sm:text-4xl"}
        >
          Contact Us
        </Text>
      </SlideIn>
      <div className="flex w-full flex-col sm:flex-row sm:justify-between">
        <div className="h-full w-full sm:h-screen sm:w-[30%]">
          <SlideIn direction={"left"} delay={0.1} className="input-container">
            <input
              type="text"
              placeholder="Name"
              className="text-montserrat w-full rounded-md bg-primary-300 p-4 text-primary-100 focus:outline-none"
            />
          </SlideIn>
          <SlideIn direction={"left"} delay={0.2} className="input-container">
            <input
              type="text"
              placeholder="E-mail"
              className="text-montserrat w-full rounded-md bg-primary-300 p-4 text-primary-100 focus:outline-none"
            />
          </SlideIn>
          <SlideIn direction={"left"} delay={0.3} className="input-container">
            <input
              placeholder="Message"
              className="text-montserrat h-40 w-full rounded-md bg-primary-300 p-4 text-primary-100 placeholder:align-text-top focus:outline-none"
            />
          </SlideIn>
          <SlideIn direction={"left"} delay={0.4}>
            <Button
              variant={"primary"}
              className={
                "group w-full font-krona transition-all duration-75 ease-in hover:from-secondary-pink hover:via-secondary-purple hover:to-secondary-blue"
              }
              classNameSpan={
                "group-hover:text-white transition-all ease-in duration-75"
              }
            >
              Submit
            </Button>
          </SlideIn>
        </div>

        <div className=" mt-4 flex h-fit w-full flex-col gap-0 rounded-lg bg-gradient-to-tr from-primary-100 via-primary-200 to-primary-100 p-4 sm:w-[40%] sm:p-8">
          <Text
            variant="title"
            className={
              "text-4xl text-primary-400 sm:max-2xl:text-6xl 3xl:text-7xl "
            }
          >
            Info
          </Text>
          <div className="flex items-center justify-center gap-2">
            <FiMail className={"inline p-2"} size={"40px"} />
            <Text className={"text-lg text-primary-400 3xl:text-3xl"}>
              perceptron@gmail.com
            </Text>
          </div>
          <div className="flex items-center justify-center gap-2">
            <FiPhoneCall className={"inline p-2"} size={"40px"} />
            <>
              <Text className={"text-lg text-primary-400 3xl:text-3xl"}>
                +880-185-998-1836, +880-176-419-5586
              </Text>
            </>
          </div>

          <div className="flex items-center justify-center gap-2">
            <MdOutlineLocationOn className={"inline p-2"} size={"40px"} />
            <Text className={"text-lg text-primary-400 3xl:text-3xl"}>
              DHK, BD
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
