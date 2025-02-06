"use client";
import { motion } from "motion/react";

type props = {
  refs: string[];
  onChangeSlide: (index: number) => void;
  currentSlide: number;
};

export default function Controls({ refs, onChangeSlide, currentSlide }: props) {
  const hover = { borderColor: "hsl(0,0%,100%,50%)" };

  const active: React.CSSProperties = {
    position: "absolute",
    bottom: -3,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--white)",
  };

  return (
    <ul className="controls destination-controls">
      {refs.map((dest, index) => {
        return (
          <motion.li
            className="destination-controls__item"
            key={dest}
            whileHover={hover}
          >
            <button
              className="controls__button destination-controls__button"
              onClick={() => onChangeSlide(index)}
            >
              {dest}
            </button>
            {currentSlide === index && (
              <motion.div
                style={active}
                layoutId="dest-controls-underline"
                id="dest-controls-underline"
              ></motion.div>
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}
