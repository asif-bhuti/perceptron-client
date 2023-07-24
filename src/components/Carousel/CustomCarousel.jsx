import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text } from "../Text/Text";
import { StatCard } from "../card/StatCard";
import { Button } from "../button/Button";
import { SlideIn } from "../anim/SlideIn";

const slides = [
  {
    id: 1,
    title: "Pluto 2023",
    description:
      "A Multi-Level Marketing Web Applications Admin Panel for Independent Sales Management Team.",
    image: "/assets/frame1.png",
    days: 45,
    satisfaction: 100,
    revesion: 5,
  },
  {
    id: 2,
    title: "Pluto 2023",
    description: "A mission to Pluto2",
    image: "/assets/frame2.png",
    days: 40,
    satisfaction: 90,
    revesion: 5,
  },
  {
    id: 3,
    title: "Pluto 2023",
    description: "A mission to Pluto3",
    image: "/assets/frame3.png",
    days: 20,
    satisfaction: 100,
    revesion: 2,
  },
];

export const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex">
      <SlideIn direction={"left"}>
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={true}
          onChange={handleSlideChange}
          className="w-[680px] mr-8"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="inline-flex items-center justify-center p-1 h-[450px] w-[680px] bg-gradient-to-r from-secondary-pink via-secondary-purple to-secondary-cyan rounded-xl"
            >
              <img
                src={slide.image}
                alt=""
                className="rounded-xl object-cover h-full w-full"
              />
            </div>
          ))}
        </Carousel>
      </SlideIn>
      <SlideIn>
        <Text variant="heading" className={"text-3xl"}>
          {slides[currentSlide].title}
        </Text>
        <Text variant="title" className={"text-white font-thin text-lg"}>
          {slides[currentSlide].description}
        </Text>

        <div className="flex my-8">
          <StatCard count={slides[currentSlide].days} text="Days Delivery" />
          <StatCard
            count={slides[currentSlide].satisfaction}
            text="Customer Satisfaction"
          />
          <StatCard
            count={slides[currentSlide].revesion}
            text="Times Revesion"
          />
        </div>
        <Button variant={"primary"}>View Demo</Button>
      </SlideIn>
    </div>
  );
};
