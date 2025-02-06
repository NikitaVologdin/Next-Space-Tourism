"use client";
import { usePathname } from "next/navigation";
import NavItem from "@/components/NavItem";

type props = {
  className?: string;
};

export default function Nav({ className }: props) {
  const pathName = usePathname();
  const navClass = className ? className : "";
  return (
    <nav className={`nav ${navClass}`} aria-label="site navigation">
      <ul className="nav__list">
        <NavItem href={"/"} pathName={pathName}>
          00 home
        </NavItem>
        <NavItem href="/destination" pathName={pathName}>
          01 destination
        </NavItem>
        <NavItem href="/crew" pathName={pathName}>
          02 crew
        </NavItem>
        <NavItem href="/technology" pathName={pathName}>
          03 technology
        </NavItem>
      </ul>
    </nav>
  );
}
