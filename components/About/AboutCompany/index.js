import React from "react";
import { useState, useEffect } from "react";
import styles from "./About.module.css";

const AboutCompany = () => {
    const [textIndex, setTextIndex] = useState(0); // State to track which text to display

  // Array of text options and descriptions
  const textOptions = [
    {
      title: "ONSITE TECHNICAL\nSUPPORT",
      description: "Time is money and we get you back up and running quickly",
    },
    {
      title: "MANAGED SERVICES\n24 X 7 X 365",
      description: "Comprehensive and proactive management that prevents problems",
    },
    {
      title: "SECURE NETWORKING\nSOLUTIONS",
      description: "Connect to your systems securely from any device",
    },
  ];

  // Function to cycle through text options every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex === textOptions.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []); // Empty dependency array ensures effect runs only once

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Technology is simply the tool we use - we measure our success by the
            success of our clients
          </h2>
          <p className={styles.description}>
            Headquartered in Vancouver, BC, TrilliumPC Network Solutions Inc. is
            a leading computer systems company, and a premier provider of
            products and services, including those required for customers to
            build their information-technology and Internet infrastructures.
          </p>
          <p className={styles.description}>
            TrilliumPC provides technical expertise but our mission isn't about
            technology. It's about people. We empower people to achieve their
            goals. Technology is simply the tool we use - we measure our success
            by the success of our clients.
          </p>
          <div className={styles.scrollDown} onClick={scrollDown}>
            <div className={styles.circle}>
              <img src="/arrow.png" alt="Scroll down" className={styles.arrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
