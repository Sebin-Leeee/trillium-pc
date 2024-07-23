import React from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          <img src="/logo.png" alt="Logo" className={styles.logoImg} />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>
          <div className={styles.link}>Home</div>
        </Link>
        <Link href="/about" className={styles.link}>
          <div className={styles.link}>About</div>
        </Link>
        <Link href="/services" className={styles.link}>
          <div className={styles.link}>Services</div>
        </Link>
      </div>
      <div className={styles.contactButton}>
        <Link href="/contact" className={styles.link}>
          <button className={styles.contactBtn}>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
