import React, { useState } from "react";
import Link from "next/link";
import styles from "./mobileNav.module.css";

const MobileNav = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const showMobileNavs = () => {
    setIsActive(!isActive);
  };
  return (
    <nav
      className={`${
        isActive ? styles.animate : styles.hide
      } flex flex-col gap-5 overflow-hidden bg-[var(--primary-color)] text-[var(--bg-color)] pb-2 relative  md:hidden px-5`}
    >
      <div
        onClick={showMobileNavs}
        className="h-[7vh] flex self-end gap-2 items-center border-b-2 border-[var(--secondary-color)] cursor-pointer"
      >
        <p className="text-xl">Menu</p>
        <span className="text-5xl text-[var(--secondary-color)]">+</span>
      </div>
      <ul className="flex flex-col items-center gap-5 text-lg self-center">
        <li className="text-2xl font-semibold border-b-2 border-b-[var(--secondary-color)]">
          <Link href="/">HeaL</Link>
        </li>
        <li className="border-b-2 border-b-[var(--secondary-color)]">
          <Link href="/">Love</Link>
        </li>
        <li className="border-b-2 border-b-[var(--secondary-color)]">
          <Link href="/">Motivation</Link>
        </li>
        <li className="border-b-2 border-b-[var(--secondary-color)]">
          <Link href="/">Hope</Link>
        </li>
        <li className="border-b-2 border-b-[var(--secondary-color)]">
          <Link href="/">Depression</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
