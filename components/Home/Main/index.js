import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";

const Main = () => {
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
      <video className={styles.video} autoPlay muted loop>
        <source src="/background1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <div className={styles.centered}>
          {/* Title with fade-in animation */}
          <h1 className={`${styles.title} ${styles.fadeIn}`}>
            {textOptions[textIndex].title.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line.includes("SUPPORT") ? (
                  <span className={styles.red}>{line}</span>
                ) : line.includes("24 X 7 X 365") ? (
                  <span className={styles.red}>{line}</span>
                ) : line.includes("SOLUTIONS") ? (
                  <span className={styles.red}>{line}</span>
                ) : (
                  line
                )}
                <br />
              </React.Fragment>
            ))}
          </h1>
          
          {/* Description with fade-in animation */}
          <p className={`${styles.description} ${styles.fadeIn}`}>
            {textOptions[textIndex].description}
          </p>

          {/* Scroll down button */}
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

export default Main;
