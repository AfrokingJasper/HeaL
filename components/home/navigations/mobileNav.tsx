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
        isActive ? styles.show : styles.hide
      } flex flex-col gap-5 overflow-hidden bg-primary text-tertiary pb-2 fixed top-0 z-[1000] right-0 left-0 md:hidden px-5`}
    >
      {/* menu button */}
      <button
        onClick={showMobileNavs}
        className="hover:scale-110 flex self-end gap-2 items-center border-b-2 border-secondary cursor-pointer"
      >
        {!isActive && <p className="text-xl">Menu</p>}
        <span
          className={`${
            isActive && "-rotate-45 scale-150 mr-2"
          } text-5xl transition-all duration-200 text-secondary`}
        >
          +
        </span>
      </button>

      {/* nav lists */}
      <ul className="link flex flex-col items-center gap-5 text-lg self-center">
        <li className={`text-2xl font-semibold ${styles["mobile__nav-list"]}`}>
          <Link href="/">HeaL</Link>
        </li>
        <li className={styles["mobile__nav-list"]}>
          <Link href="/">Love</Link>
        </li>
        <li className={styles["mobile__nav-list"]}>
          <Link href="/">Motivation</Link>
        </li>
        <li className={styles["mobile__nav-list"]}>
          <Link href="/">Hope</Link>
        </li>
        <li className={styles["mobile__nav-list"]}>
          <Link href="/">Depression</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
