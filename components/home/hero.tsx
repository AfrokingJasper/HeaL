import React from "react";
import styles from "./hero.module.css";
import MobileNav from "./navigations/mobileNav";
import DesktopNav from "./navigations/desktopNav";

const Hero = () => {
  return (
    <header>
      {/* mobile nav */}
      <MobileNav />

      {/* heading */}
      <div
        className={`${styles.header} bg-[var(--secondary-color)] text-[var(--bg-color)] flex flex-col items-center justify-center h-44`}
      >
        <div className="z-10 text-center">
          <h1>HeaL</h1>
          <p className="mt-2">
            A Haven Of Heartfelt Expressions And Soulful Words
          </p>
        </div>
        {/* overlay */}
        <div className={styles.overlay}></div>
      </div>

      {/* desktop nav */}
      <DesktopNav />
    </header>
  );
};

export default Hero;
