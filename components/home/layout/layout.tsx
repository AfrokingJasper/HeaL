import React, { Fragment } from "react";
// import type
import styles from "./layout.module.css";
import MobileNav from "../navigations/mobileNav";
import DesktopNav from "../navigations/desktopNav";
import Footer from "../footer/footer";

interface Layoutprops {
  children: React.ReactNode;
  // className: string;
}

const Layout = (props: Layoutprops) => {
  return (
    <Fragment>
      <header>
        {/* mobile nav */}
        <MobileNav />

        {/* heading */}
        <div
          className={`${styles.header} mt-[7vh] md:mt-0 bg-secondary text-tertiary flex flex-col items-center justify-center h-44`}
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
      <main className="px-5 md:px-40 lg:px-5 xl:px-32 mt-10 text-tertiary">
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
