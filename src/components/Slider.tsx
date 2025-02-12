"use client";
import Distance from "@/ui/Distance";
import SlideImage from "@/ui/SlideImage";
import Controls from "@/ui/Controls";
import Article from "@/ui/Article";
import { useState } from "react";

interface ISlide {
  name: string;
  description: string;
  images: {
    [key: string]: {
      src: string;
      width: number;
      height: number;
    };
  };
  subheading?: string;
  distance?: string;
  travel?: string;
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
  distance,
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
        src={slides[currentSlide].images.png.src}
        width={slides[currentSlide].images.png.width}
        defaultWidth={445}
        height={slides[currentSlide].images.png.height}
        defaultHeight={445}
        alt={`Shows destination target – ${slides[currentSlide].name} planet`}
        priority={true}
        styleClass={styleClass}
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
        {distance && (
          <Distance
            distance={slides[currentSlide].distance!}
            travel={slides[currentSlide].travel!}
          />
        )}
      </Article>
    </>
  );
}
