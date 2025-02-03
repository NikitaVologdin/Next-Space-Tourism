"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "motion/react";

type props = {
  className?: string;
};

export default function Nav({ className }: props) {
  const pathName = usePathname();
  const route = pathName.split("/")[1];

  return (
    <nav className={`nav ${className ? className : null}`}>
      <ul className="nav__list">
        <motion.li className="nav__item">
          <Link
            className={`nav__link ${route === "/" ? "nav__link_active" : ""}`}
            href="/"
          >
            00 HOME
          </Link>
        </motion.li>
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
  );
}
