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
    <div className="flex mobile:flex-col h-full">
      <SlideIn direction={"left"}>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          transitionTime={1500}
          interval={7000}
          onChange={handleSlideChange}
          className="w-[880px] 3xl:w-[1400px] h-full mr-8 mobile:w-[380px] mobile:mb-4"
        >
          {slides.map((slide) => (
            <div key={slide.id}>
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                transitionTime={500}
                interval={2000}
              >
                {slide.images.map((image, index) => (
                  <div
                    className="inline-flex items-center justify-center p-1 h-full w-[880px] 3xl:w-[1400px] mobile:h-[250px] mobile:w-[380px] bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan rounded-xl"
                    key={index}
                  >
                    <img
                      src={image}
                      alt={slide.alt}
                      className="rounded-xl object-cover h-full w-full"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          ))}
        </Carousel>
      </SlideIn>

      <SlideIn direction={"left"}>
        <section>
          <Text
            variant="heading"
            className={"text-3xl mobile:text-2xl 3xl:text-4xl mb-2"}
          >
            {slides[currentSlide].title}
          </Text>
          <Text
            variant="title"
            className={
              "text-white font-thin text-lg mobile:text-xl mobile:w-[96%] 3xl:text-3xl"
            }
          >
            {slides[currentSlide].description}
          </Text>
        </section>
        <section>
          <div className="flex my-8">
            <StatCard count={slides[currentSlide].days} text="Days Delivery" />
            <StatCard
              count={slides[currentSlide].satisfaction}
              percent={true}
              text="Performance Rate"
            />
          </div>
          <Button variant={"primary"}>View Demo</Button>
        </section>
      </SlideIn>
    </div>
  );
};
