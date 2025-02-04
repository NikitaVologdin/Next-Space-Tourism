"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
  initial: {
    opacity: 0,
    // x: "-100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    // x: "100%",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export default function TemplateWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const contentClass = className ? className : "";
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className={`page__content ${contentClass}`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
