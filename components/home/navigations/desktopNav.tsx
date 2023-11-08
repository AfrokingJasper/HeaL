import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="px-5 md:px-40 pt-10 flex justify-center xl:justify-end">
      <ul className="hidden  md:flex justify-between md:gap-10 text-lg border-b-2 border-[var(--secondary-color)]">
        <li className="text-2xl font-semibold">
          <Link href="/">HeaL</Link>
        </li>
        /
        <li>
          <Link href="/">Love</Link>
        </li>
        /
        <li>
          <Link href="/">Motivation</Link>
        </li>
        /
        <li>
          <Link href="/">Hope</Link>
        </li>
        /
        <li>
          <Link href="/">Depression</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
