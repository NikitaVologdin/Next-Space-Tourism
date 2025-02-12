"use client";
import Image from "next/image";
import { motion } from "motion/react";

type props = {
  styleClass: string;
  src: string;
  width: number;
  defaultWidth: number;
  height: number;
  defaultHeight: number;
  priority: boolean;
  alt: string;
};

export default function SlideImage({
  styleClass,
  src,
  width,
  defaultWidth,
  height,
  defaultHeight,
  priority,
  alt,
}: props) {
  const isDestination = styleClass === "destination";
  const imageVariants = {
    initial: { opacity: 0, x: isDestination ? -50 : 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: isDestination ? 4 : 2 },
    },
  };
  return (
    <>
      <motion.div
        className={`slide-image__container`}
        variants={imageVariants}
        initial="initial"
        animate="animate"
        key={src}
      >
        <Image
          src={src}
          alt={alt}
          width={width || defaultWidth}
          height={height || defaultHeight}
          priority={priority}
        />
      </motion.div>
    </>
  );
}
