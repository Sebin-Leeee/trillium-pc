import React from 'react';
import styles from './Advantages.module.css';
import icon1 from '../../../public/people.png';
import icon2 from '../../../public/virtual.png';
import icon3 from '../../../public/relationship.png';

const Advantages = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.box1}`}>
        <img src={icon1} alt="Icon 1" className={styles.icon} />
        <h2 className={styles.h2}>20+ years of SMB IT Services</h2>
        <p className={styles.p}>Trillium PC has been focused on delivering exceptional IT services and solutions to the SMB market since our inception. We understand the challenges SMB's face and we provide expert advice and consulting.</p>
      </div>
      <div className={`${styles.box} ${styles.box2}`}>
        <img src={icon2} alt="Icon 2" className={styles.icon} />
        <h2 className={styles.h2}>24 x 7 x 365 Virtual Support</h2>
        <p className={styles.p}>Our 'Live' Virtual Helpdesk is available 24 x 7 x 365. Our BC based technicians can remotely solve over 90% of your issues the first time. No need for escalations and costly downtime waiting until Monday.</p>
      </div>
      <div className={`${styles.box} ${styles.box3}`}>
        <img src={icon3} alt="Icon 3" className={styles.icon} />
        <h2 className={styles.h2}>Hardware & Software Procurement</h2>
        <p className={styles.p}>Over the last 20+ years we have developed excellent relationships with the major vendors and as a result we are able to source what you need at a great price.</p>
      </div>
    </div>
  );
};

export default Advantages;
