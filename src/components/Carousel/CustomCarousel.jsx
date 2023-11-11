import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text } from "../Text/Text";
import { StatCard } from "../card/StatCard";
import { Button } from "../button/Button";
import { SlideIn } from "../anim/SlideIn";
import { slides } from "./slides";

export const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex w-screen flex-col p-4 sm:h-full sm:flex-row">
      <>
        <SlideIn direction={"left"} className={"w-full"}>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            transitionTime={1000}
            interval={4000}
            onChange={handleSlideChange}
            className="mb-6 w-full sm:mr-8 sm:h-full sm:w-[880px] 3xl:w-[1400px]"
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="inline-flex h-[250px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan p-1 sm:h-full sm:w-[880px] 3xl:w-[1400px]"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            ))}
          </Carousel>
        </SlideIn>
      </>

      <>
        <SlideIn className={"flex h-[60%] flex-col sm:h-[80%]"}>
          <section className="sm:h-[50%] 3xl:h-[40%]">
            <Text
              variant="heading"
              className={"mb-2 text-2xl sm:text-3xl 2xl:text-4xl"}
            >
              {slides[currentSlide].title}
            </Text>
            <Text
              variant="title"
              className={
                " w-full text-justify text-base font-thin text-white sm:w-[80%] sm:text-base 2xl:text-2xl"
              }
            >
              {slides[currentSlide].description}
            </Text>
          </section>
          <section className="mb-4">
            <div className="mb-4 flex gap-4">
              <StatCard
                count={slides[currentSlide].days}
                text="Days Delivery"
              />
              <StatCard
                count={slides[currentSlide].satisfaction}
                percent={true}
                text="Customer Satisfaction"
              />
            </div>
            <Button variant={"primary"}>View Demo</Button>
          </section>
        </SlideIn>
      </>
    </div>
  );
};
