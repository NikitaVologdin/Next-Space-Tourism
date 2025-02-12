"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Explore() {
  const pulseVariants = {
    initial: { boxShadow: "0 0 0 0px #ffffffa0" },
    animate: (delay: number) => {
      return {
        boxShadow: "0 0 0 90px #ffffff23",
        transition: { repeat: Infinity, duration: 3, delay: delay * 1 },
      };
    },
    hover: { x: 5 },
  };

  return (
    <motion.div
      className="explore__wrapper"
      variants={pulseVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      custom={3}
    >
      <motion.span
        variants={pulseVariants}
        custom={2}
        animate="animate"
        className="explore__wave"
      ></motion.span>
      <motion.span
        variants={pulseVariants}
        custom={1}
        animate="animate"
        className="explore__wave"
      ></motion.span>
      <Link href="/destination" className="explore__link">
        Explore
      </Link>
    </motion.div>
  );
}
