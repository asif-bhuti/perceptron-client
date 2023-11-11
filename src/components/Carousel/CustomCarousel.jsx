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
    <div className="flex flex-col sm:flex-row sm:h-full w-screen p-4">
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
            className="sm:w-[880px] 3xl:w-[1400px] sm:h-full w-full sm:mr-8 mb-6"
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="inline-flex items-center justify-center p-1 sm:h-full sm:w-[880px] 3xl:w-[1400px] h-[250px] w-full bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan rounded-xl"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="rounded-xl object-cover h-full w-full"
                />
              </div>
            ))}
          </Carousel>
        </SlideIn>
      </>

      <>
        <SlideIn className={"flex flex-col justify-between h-[60%] sm:h-[80%]"}>
          <section>
            <Text
              variant="heading"
              className={"sm:text-3xl text-2xl 2xl:text-4xl mb-2"}
            >
              {slides[currentSlide].title}
            </Text>
            <Text
              variant="title"
              className={
                " text-white font-thin sm:text-base text-base w-full sm:w-[80%] text-justify 2xl:text-2xl"
              }
            >
              {slides[currentSlide].description}
            </Text>
          </section>
          <section className="mb-4">
            <div className="flex gap-4 mb-4">
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
