"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

type props = { refs: string[] };

export default function Controls({ refs }: props) {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="controls technology-controls">
      {refs.map((ref, index) => {
        return (
          <Link
            href={`${ref}`}
            key={ref + index}
            className={`controls__button technology-controls__button ${
              slug === ref ? "technology-controls__button_active" : ""
            }`}
          >
            <span className="technology-controls__button_text">
              {index + 1}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
