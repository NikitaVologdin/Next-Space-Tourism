"use client";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import {
  selectIsMenuOpen,
  setIsMenuOpen,
} from "../lib/features/mobileMenu/mobileMenuSlice";

export default function Hamburger() {
  const dispatch = useAppDispatch();
  const isMenuShown = useAppSelector(selectIsMenuOpen);

  const isExpanded = isMenuShown;
  const expandedClass = isExpanded ? "hamburger__line_expanded" : null;

  function toggleMenuHandler() {
    dispatch(setIsMenuOpen(!isMenuShown));
  }

  return (
    <button className="hamburger" onClick={toggleMenuHandler}>
      <span className="visually-hidden">{`${
        isMenuShown ? "Close" : "Open"
      } navigation menu`}</span>
      <span className={`hamburger__line ${expandedClass}`}></span>
      <span className={`hamburger__line ${expandedClass}`}></span>
      <span className={`hamburger__line ${expandedClass}`}></span>
    </button>
  );
}
