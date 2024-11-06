'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',  // Changed from 'direction' to 'orientation'
      smoothWheel: true,       // Changed from 'smooth' to 'smoothWheel'
      wheelMultiplier: 1,      // Changed from 'mouseMultiplier'
    });

    // Connect lenis to gsap ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Select all instances of each class
      const headers = document.querySelectorAll(`.${styles.bigHeader}`);
      const portraits = document.querySelectorAll(`.${styles.portrait}`);
      const headers2 = document.querySelectorAll(`.${styles.bigHeader2}`);

      // Animate each header individually
      headers.forEach(header => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
          y: 100,
          opacity: 0
        });
      });

      // Animate each portrait individually
      portraits.forEach(portrait => {
        gsap.from(portrait, {
          scrollTrigger: {
            trigger: portrait,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
          scale: 1.8,
          opacity: 0
        });
      });

      // Animate each secondary header individually
      headers2.forEach(header2 => {
        gsap.from(header2, {
          scrollTrigger: {
            trigger: header2,
            start: "top bottom",
            end: "top center",
            scrub: 1,
          },
          y: 50,
          opacity: 0
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.bigHeader}>
            Full Stack Developer
          </div>
          <Image 
            src="/assets/me.JPG" 
            alt="Portrait" 
            className={styles.portrait} 
            width={500} 
            height={500}
          />
          <div className={styles.bigHeader2}>
            Angular Framework Prodigy
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.bigHeader}>
            ifypablo
          </div>
          <Image 
            src="/assets/me.JPG" 
            alt="Portrait" 
            className={styles.portrait} 
            width={500} 
            height={500}
          />
          <div className={styles.bigHeader2}>
            Music Producer
          </div>

          <div className={styles.bigHeader}>
            Full Stack Developer
          </div>
          <Image 
            src="/assets/me.JPG" 
            alt="Portrait" 
            className={styles.portrait} 
            width={500} 
            height={500}
          />
          <div className={styles.bigHeader2}>
            Angular Framework Prodigy
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.bigHeader}>
            ifypablo
          </div>
          <Image 
            src="/assets/me.JPG" 
            alt="Portrait" 
            className={styles.portrait} 
            width={500} 
            height={500}
          />
          <div className={styles.bigHeader2}>
            Music Producer
          </div>
        </main>
      </div>
    </div>
  );
}