"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

type props = { refs: string[] };

export default function Controls({ refs }: props) {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="controls destination-controls">
      {refs.map((ref, index) => {
        return (
          <Link
            href={`${ref}`}
            key={ref + index}
            className={`controls__button destination-controls__button ${
              slug === ref ? "destination-controls__button_active" : ""
            }`}
          >
            {ref}
          </Link>
        );
      })}
    </div>
  );
}
