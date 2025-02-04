"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useCallback } from "react";
type props = {
  href: string;
  pathName: string;
  children: React.ReactNode;
};

export default function NavItem({ href, pathName, children }: props) {
  const getRoute = useCallback((pathName: string) => {
    const arr = pathName.split("/");
    const route = arr[1];
    return route === "" ? "/" : route;
  }, []);

  const route = getRoute(pathName);
  const hrefRoute = getRoute(href);

  const active: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--white)",
  };

  return (
    <motion.li className="nav__item">
      <Link className="nav__link" href={href}>
        {children}
      </Link>
      {route === hrefRoute && (
        <motion.div
          style={active}
          layoutId="underline"
          id="underline"
        ></motion.div>
      )}
    </motion.li>
  );
}
