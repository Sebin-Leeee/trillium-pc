import React from "react";
import styles from "./WhatWeDo.module.css";

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDo}>
      <div className={styles.row}>
        <div className={styles.leftText}>
          <p>01</p>
          <h2 className={styles.title}>
            Networking and
            <br />
            Cabling Solutions
          </h2>
          <p className={styles.detail}>
            Trillium PC has thorough knowledge of all components of global
            networking and the procedures for cabling infrastructure
            installation. We offer onsite technical support and tailored
            networking solutions to meet your business needs.
          </p>
        </div>
        <div className={styles.rightImage}>
          <img src="/image1.png" alt="Image 1" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.leftImage}>
          <img src="/image2.png" alt="Image 2" />
        </div>
        <div className={styles.rightText}>
          <p>02</p>
          <h2 className={styles.title}>
            Lenovo Computer
            <br />
            and Server Services
          </h2>
          <p className={styles.detail}>
            Trillium PC specializes in servicing Lenovo computers and servers,
            providing expert repairs, custom builds, and maintenance for optimal
            performance and reliability.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.leftText}>
          <p>03</p>
          <h2 className={styles.title}>Remote Support</h2>
          <p className={styles.detail}>
            Reducing downtime is crucial to running your business more
            effectively and profitably. Our remote support offering allows us to
            be "onsite" in less than 2 minutes ensuring that you are up and
            running as soon as possible.
          </p>
        </div>
        <div className={styles.rightImage}>
          <img src="/image3.png" alt="Image 3" />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.leftImage}>
          <img src="/image4.png" alt="Image 4" />
        </div>
        <div className={styles.rightText}>
          <p>04</p>
          <h2 className={styles.title}>
            Cloud Services
            <br />
            and Managed IT
          </h2>
          <p className={styles.detail}>
            Leverage our cloud solutions to enhance your business operations. We
            offer Centrestack Cloud drive services, comprehensive managed IT
            services with N-Able, and reliable cloud backup solutions with Cove.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
