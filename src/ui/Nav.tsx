"use client";
import { usePathname } from "next/navigation";
import NavItem from "@/components/NavItem";

type props = {
  className?: string;
};

export default function Nav({ className }: props) {
  const pathName = usePathname();

  return (
    <nav className={`nav ${className ? className : null}`}>
      <ul className="nav__list">
        <NavItem href={"/"} pathName={pathName}>
          00 home
        </NavItem>
        <NavItem href="/destination/moon" pathName={pathName}>
          01 destination
        </NavItem>
        <NavItem href="/crew/commander" pathName={pathName}>
          02 crew
        </NavItem>
        <NavItem href="/technology/launch-vehicle" pathName={pathName}>
          03 technology
        </NavItem>
      </ul>
    </nav>
  );
}
