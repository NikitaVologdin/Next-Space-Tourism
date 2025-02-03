"use client";
import Link from "next/link";
import { motion } from "motion/react";

type props = {
  path: string;
  route: string;
  children: React.ReactNode;
};

export default function NavItem({ path, route, children }: props) {
  //   const pathName = usePathname();
  //   const route = pathName.split("/")[1];

  const hover = {
    borderColor: "hsl(0,0%,100%,50%)",
  };
  const active: React.CSSProperties = {
    position: "absolute",
    bottom: -3,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--white)",
  };

  return (
    <motion.li className="nav__item" whileHover={hover}>
      <Link className="nav__link" href={path}>
        {children}
      </Link>
      {route === path && (
        <motion.div
          style={active}
          layoutId="underline"
          id="underline"
        ></motion.div>
      )}
    </motion.li>
  );
}
