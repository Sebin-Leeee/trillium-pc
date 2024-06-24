import React from "react";
import styles from "./Overlay.module.css";

const OverlaySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>Managed Services 24 X 7 X 365</h2>
          <p className={styles.description}>
            Comprehensive and proactive management that prevents problems
          </p>
          <button className={styles.button}>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default OverlaySection;
