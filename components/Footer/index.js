import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <p className={styles.text}>
        TrilliumPC Network Solutions Inc. © 2024 • <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
      </p>
    </div>
  );
};

export default Footer;