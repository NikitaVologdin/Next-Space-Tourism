"use client";
import { motion } from "motion/react";

type props = {
  refs: string[];
  onChangeSlide: (index: number) => void;
  currentSlide: number;
  controlsClass: string;
};

export default function Controls({
  refs,
  onChangeSlide,
  currentSlide,
  controlsClass,
}: props) {
  const hover = { borderColor: "hsl(0,0%,100%,50%)" };

  const active: React.CSSProperties = {
    position: "absolute",
    bottom: -3,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--white)",
  };

  const isDestination = controlsClass === "destination";
  const isCrew = controlsClass === "crew";
  const isTechnology = controlsClass === "technology";
  return (
    <ul className={`controls ${controlsClass}-controls`}>
      {refs.map((control, index) => {
        const isCurrent = currentSlide === index;
        return (
          <motion.li
            className={`${controlsClass}-controls__item`}
            key={control}
            whileHover={hover}
          >
            <button
              className={`controls__button ${controlsClass}-controls__button ${
                isCrew && isCurrent
                  ? controlsClass + "-controls__button_active"
                  : ""
              }`}
              onClick={() => onChangeSlide(index)}
            >
              {isDestination && control}
              {isCrew && ""}
              {isTechnology && index + 1}
            </button>
            {isDestination && isCurrent && (
              <motion.div
                style={active}
                layoutId="controls-underline"
                id="controls-underline"
              ></motion.div>
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}
