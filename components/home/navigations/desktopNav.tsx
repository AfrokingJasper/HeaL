import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex justify-center xl:justify-end px-5 md:px-40 pt-10 ">
      <ul className="link flex justify-between md:gap-10 text-lg border-b-2 border-secondary">
        <li className="text-2xl font-semibold">
          <Link href="/">HeaL</Link>
        </li>
        /
        <li>
          <Link href="/section/love">Love</Link>
        </li>
        /
        <li>
          <Link href="/section/motivation">Motivation</Link>
        </li>
        /
        <li>
          <Link href="/section/hope">Hope</Link>
        </li>
        /
        <li>
          <Link href="/section/depression">Depression</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
