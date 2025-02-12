"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Explore() {
  const pulseVariants = {
    animate: (delay: number) => {
      return {
        boxShadow: "0 0 0 90px #ffffff23",
        transition: { repeat: Infinity, duration: 3, delay: delay * 1 },
      };
    },
    hover: () => {
      return {
        x: [-1, 2, 5, 4, -4, 5, 0],
        y: [0, 3, -5, 4, -4, 5, 1].reverse(),
        transition: { repeat: Infinity, duration: 6 },
      };
    },
  };

  return (
    <motion.div
      className="explore__wrapper"
      variants={pulseVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      custom={3}
      whileTap="pressed"
    >
      <motion.span
        variants={pulseVariants}
        custom={2}
        className="explore__wave"
      ></motion.span>
      <motion.span
        variants={pulseVariants}
        custom={1}
        className="explore__wave"
      ></motion.span>
      <Link href="/destination" className="explore__link">
        Explore
      </Link>
    </motion.div>
  );
}
