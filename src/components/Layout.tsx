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
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
