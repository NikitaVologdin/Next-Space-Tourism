"use client";
import SlideImage from "@/ui/technology/SlideImage";
import Controls from "@/ui/Controls";
import Article from "@/ui/Article";
import { useState } from "react";

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

  function changeSlideHandler(index: number) {
    setCurrentSlide(index);
  }

  return (
    <>
      <SlideImage
        landscapeImage={slides[currentSlide].images.landscape}
        portraitImage={slides[currentSlide].images.portrait}
      />
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
