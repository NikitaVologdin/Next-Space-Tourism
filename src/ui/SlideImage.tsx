"use client";
import Image from "next/image";
import { motion } from "motion/react";

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
  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { type: "spring", duration: 4 } },
  };
  return (
    <>
      <motion.div
        className={`slide-image__container ${className || ""}`}
        variants={imageVariants}
        initial="initial"
        animate="animate"
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
