"use client";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

type props = {
  children: React.ReactNode;
  className: string;
  isDialogShown: boolean;
};

export default function Dialog({ children, className, isDialogShown }: props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const path = usePathname();
  const pathRef = useRef(path);
  useEffect(() => {
    let timeoutID = null;
    if (isDialogShown) {
      dialogRef.current?.showModal();
    }
    if (!isDialogShown) {
      timeoutID = setTimeout(() => {
        dialogRef.current?.close();
      }, 1000);
    }
    if (timeoutID) {
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [isDialogShown]);

  useEffect(() => {
    if (path !== pathRef.current) dialogRef.current?.close();
  }, [path]);

  const dialog = (
    <motion.dialog
      className={className}
      ref={dialogRef}
      initial={{ x: "100vw" }}
      animate={{ x: "47.5%" }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.4, ease: [0, 0.55, 0.45, 1] }}
    >
      {children}
    </motion.dialog>
  );
  return createPortal(dialog, document.body);
}
