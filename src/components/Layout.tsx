"use client";
import { motion } from "framer-motion";
import React from "react";

type props = {
  children: React.ReactNode;
  className: string;
};

const Layout = ({ children, className }: props) => {
  const contentClass = className ? className : "";
  return (
    <motion.div
      className={`page__content ${contentClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
