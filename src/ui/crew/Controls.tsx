"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

type props = { refs: string[] };

export default function Controls({ refs }: props) {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="controls crew-controls">
      {refs.map((ref, index) => {
        return (
          <Link
            href={`${ref}`}
            key={ref + index}
            className={`controls__button crew-controls__button ${
              slug === ref ? "crew-controls__button_active" : ""
            }`}
          >
            <div className="crew-controls__dot"></div>
          </Link>
        );
      })}
    </div>
  );
}
