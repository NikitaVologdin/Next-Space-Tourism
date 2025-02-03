"use client";
import { useAppSelector } from "../lib/hooks";
import { selectIsMenuOpen } from "../lib/features/mobileMenu/mobileMenuSlice";
import Dialog from "@/components/Dialog";
import Hamburger from "./Hamburger";
import { AnimatePresence } from "motion/react";

import { usePathname } from "next/navigation";
import Link from "next/link";

// import Nav from "@/ui/Nav";

export default function MobileNav() {
  const isMenuShown = useAppSelector(selectIsMenuOpen);

  const pathName = usePathname();
  const route = pathName.split("/")[1];

  return (
    <AnimatePresence>
      {isMenuShown && (
        <Dialog className="mobile-menu" isDialogShown={isMenuShown}>
          <Hamburger />
          <nav className="nav mobile-menu__nav" aria-label="mobile navigation">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    route === "/" ? "nav__link_active" : ""
                  }`}
                  href="/"
                >
                  00 HOME
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    route === "destination" ? "nav__link_active" : ""
                  }`}
                  href="/destination/moon"
                >
                  01 DESTINATION
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    route === "crew" ? "nav__link_active" : ""
                  }`}
                  href="/crew/commander"
                >
                  02 CREW
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    route === "technology" ? "nav__link_active" : ""
                  }`}
                  href="/technology/launch-vehicle"
                >
                  03 TECHNOLOGY
                </Link>
              </li>
            </ul>
          </nav>
          {/* <Nav className="mobile-menu__nav" /> */}
          );
        </Dialog>
      )}
    </AnimatePresence>
  );
}
