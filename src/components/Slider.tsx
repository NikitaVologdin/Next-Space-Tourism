"use client";
import Distance from "@/ui/Distance";
import SlideImage from "@/ui/SlideImage";
import Controls from "@/ui/destination/Controls";
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
  distance?: string;
  travel?: string;
}

type props = {
  slides: ISlide[];
  distance: boolean;
  controls: string[];
};

export default function Slider({ slides, distance, controls }: props) {
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
      />
      <Article
        name={slides[currentSlide].name}
        description={slides[currentSlide].description}
        topControls={true}
        hr={true}
        className="destination__article"
      >
        <Controls
          refs={controls}
          onChangeSlide={changeSlideHandler}
          currentSlide={currentSlide}
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
