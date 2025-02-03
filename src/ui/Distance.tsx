"use client";
import { motion } from "motion/react";

type props = {
  distance: string;
  travel: string;
};
export default function distance({ distance, travel }: props) {
  const sentenceVariants = {
    hidden: {},
    // change staggerChildren variable to speed up or slow down typing.
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
  };
  return (
    <div className="distance">
      <div className="distance__content">
        <h3 className="distance__heading">
          <strong className="distance__subheading">avg. distance</strong>
          <motion.p
            key={distance}
            variants={sentenceVariants}
            className="distance__title"
            initial="hidden"
            animate="visible"
          >
            {distance.split("").map((letter, index) => {
              return (
                <motion.span key={letter + index} variants={letterVariants}>
                  {letter}
                </motion.span>
              );
            })}
          </motion.p>
        </h3>
        <h3 className="distance__heading">
          <strong className="distance__subheading">est. travel time</strong>
          <motion.p
            key={travel}
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="distance__title"
          >
            {travel.split("").map((letter, index) => {
              return (
                <motion.span key={letter + index} variants={letterVariants}>
                  {letter}
                </motion.span>
              );
            })}
          </motion.p>
        </h3>
      </div>
    </div>
  );
}
