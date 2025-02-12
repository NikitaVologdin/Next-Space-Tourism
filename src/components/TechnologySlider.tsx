"use client";
import SlideImage from "@/ui/technology/SlideImage";
import Controls from "@/ui/Controls";
import Article from "@/ui/Article";
import { useState } from "react";
import { motion } from "motion/react";

interface ISlide {
  name: string;
  images: {
    landscape: { src: string; width: number; height: number; quality: number };
    portrait: { src: string; width: number; height: number; quality: number };
  };
  description: string;
  subheading?: string;
}

type props = {
  slides: ISlide[];
  distance: boolean;
  controls: string[];
  topControls: boolean;
  hr: boolean;
  styleClass: string;
};

export default function Slider({
  slides,
  controls,
  topControls,
  hr,
  styleClass,
}: props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  function changeSlideHandler(index: number) {
    setCurrentSlide(index);
  }
  const slideVariants = { fadeOut: { opacity: 0 }, fadeIn: { opacity: 1 } };
  const transition = { type: "spring", duration: 2 };
  return (
    <>
      <motion.div
        variants={slideVariants}
        initial="fadeOut"
        animate="fadeIn"
        transition={transition}
        className="technology__slide-image"
        key={currentSlide}
      >
        <SlideImage
          landscapeImage={slides[currentSlide].images.landscape}
          portraitImage={slides[currentSlide].images.portrait}
        />
      </motion.div>
      <Article
        name={slides[currentSlide].name}
        description={slides[currentSlide].description}
        topControls={topControls}
        hr={hr}
        className={styleClass}
        subheading={slides[currentSlide].subheading}
      >
        <Controls
          refs={controls}
          onChangeSlide={changeSlideHandler}
          currentSlide={currentSlide}
          controlsClass={styleClass}
        />
      </Article>
    </>
  );
}
