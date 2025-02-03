"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "motion/react";

type props = { refs: string[] };

export default function Controls({ refs }: props) {
  const { slug } = useParams<{ slug: string }>();
  const hover = { borderColor: "hsl(0,0%,100%,50%)" };

  const active: React.CSSProperties = {
    position: "absolute",
    bottom: -3,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--white)",
  };

  return (
    <ul className="controls destination-controls">
      {refs.map((dest) => {
        return (
          <motion.li
            className="controls__button destination-controls__button"
            key={dest}
            whileHover={hover}
          >
            <Link href={`${dest}`}>{dest}</Link>
            {slug === dest && (
              <motion.div
                style={active}
                layoutId="dest-controls-underline"
                id="dest-controls-underline"
              ></motion.div>
            )}
          </motion.li>
        );
      })}
    </ul>
  );
}
