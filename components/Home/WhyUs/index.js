import React from "react";
import styles from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.sections}>
        <div className={styles.section}><span className={styles.red}>Why</span> us,</div>
        <div className={styles.section}><span className={styles.red}>Who</span> we are,</div>
        <div className={styles.section}><span className={styles.red}>What</span> we do</div>
      </div>
      <div className={styles.right}>
        <p className={styles.contentBold}>
          Our primary focus is your business and its goals. We then work with
          you to figure out the right technologies to help you realize your
          vision.
        </p>
        <p className={styles.content}>
          Too often IT professional services firms focus on their solutions and
          products to meet quotas. We are technology partners to our clients and
          work for their benefit.
          <br /><br/>
          Our team of certified consultants and technical support staff are
          continuously updating their skills as required in this fast changing
          global economy.
        </p>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};

export default WhyUs;
