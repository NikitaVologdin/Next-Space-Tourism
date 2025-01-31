"use client";
import Link from "next/link";

export default function Explore() {
  return (
    <Link href="/destination/mars" className="explore pulse" type="button">
      Explore
    </Link>
  );
}
