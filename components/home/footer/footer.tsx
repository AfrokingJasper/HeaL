import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary text-tertiary flex flex-col gap-3 items-center py-10">
      <div className="flex gap-5 text-3xl ">
        <span className={styles["footer__links"]}>
          <AiOutlineLinkedin />
        </span>
        <span className={styles["footer__links"]}>
          <AiOutlineFacebook />
        </span>
        <span className={styles["footer__links"]}>
          <AiOutlineWhatsApp />
        </span>
      </div>

      <nav>
        <ul className="flex gap-10 md:text-lg">
          <li className={styles["footer__links"]}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles["footer__links"]}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={styles["footer__links"]}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <p>© 2023 HeaL. All rights reserved</p>
    </footer>
  );
};

export default Footer;
