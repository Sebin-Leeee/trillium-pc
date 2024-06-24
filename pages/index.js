import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Main from "@/components/Home/Main";
import NavBar from "@/components/NavBar";
import WhyUs from "@/components/Home/WhyUs";
import WhatWeDo from "@/components/Home/WhatWeDo";
import Reviews from "@/components/Home/Reviews";
import OverlaySection from "@/components/Home/Overlay";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css"; // Adjust path as per your project structure

export default function Home() {
  const mainRef = useRef(null);
  const whyUsRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const reviewsRef = useRef(null);
  const overlayRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const fadeInElement = (ref) => {
      if (ref.current) {
        const topOffset = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (topOffset < windowHeight * 0.75) {
          ref.current.classList.add(styles.visible);
        }
      }
    };

    const handleScroll = () => {
      fadeInElement(mainRef);
      fadeInElement(whyUsRef);
      fadeInElement(whatWeDoRef);
      fadeInElement(reviewsRef);
      fadeInElement(overlayRef);
      fadeInElement(footerRef);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <Main />
        <div ref={whyUsRef} className={`${styles.section} ${styles.fadeIn}`}>
          <WhyUs />
        </div>
        <div ref={whatWeDoRef} className={`${styles.section} ${styles.fadeIn}`}>
          <WhatWeDo />
        </div>
        <div ref={reviewsRef} className={`${styles.section} ${styles.fadeIn}`}>
          <Reviews />
        </div>

        <OverlaySection />

        <Footer />
      </main>
    </>
  );
}
