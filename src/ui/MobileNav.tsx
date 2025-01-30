"use client";
import { useAppSelector } from "../lib/hooks";
import { selectIsMenuOpen } from "../lib/features/mobileMenu/mobileMenuSlice";
import Dialog from "@/components/Dialog";
import Nav from "./Nav";
import Hamburger from "./Hamburger";
import { AnimatePresence } from "motion/react";

export default function MobileNav() {
  const isMenuShown = useAppSelector(selectIsMenuOpen);

  return (
    <AnimatePresence>
      {isMenuShown && (
        <Dialog className="mobile-menu" isDialogShown={isMenuShown}>
          <Hamburger />
          <Nav className="mobile-menu__nav" />
        </Dialog>
      )}
    </AnimatePresence>
  );
}
