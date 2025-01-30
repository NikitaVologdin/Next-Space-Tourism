"use client";
import Image from "next/image";

type props = {
  className?: string;
  src: string;
  width: number;
  defaultWidth: number;
  height: number;
  defaultHeight: number;
  priority: boolean;
  alt: string;
};

export default function SlideImage({
  className,
  src,
  width,
  defaultWidth,
  height,
  defaultHeight,
  priority,
  alt,
}: props) {
  console.log(width);
  return (
    <div className={`slide-image__container ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        width={width || defaultWidth}
        height={height || defaultHeight}
        priority={priority}
      />
    </div>
  );
}
