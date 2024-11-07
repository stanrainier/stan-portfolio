// app/about/page.tsx
'use client';
import React, { useLayoutEffect, useRef } from 'react';
import styles from '../styles/about.module.css';
import Header from '../components/header/header';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";

const About: React.FC = () => {
  const containerRef = useRef(null);
  const techSectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headers = document.querySelectorAll(`.${styles.description}`);
      const portraits = document.querySelectorAll(`.${styles.portrait}`);
      const headers2 = document.querySelectorAll(`.${styles.bigHeader2}`);
      const techItems = document.querySelectorAll(`.${styles.techItem}`);

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

      // Animate each tech item individually
      techItems.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "center center",
            scrub: 1,
            toggleActions: "play none none reverse"
          },
          scale: 0.3,        // Start at a smaller scale for a bigger zoom-in effect
          rotation: -20,     // Start with a slight rotation for a dynamic effect
          opacity: 0,
          duration: 1.5,     // Extend the duration to emphasize the entrance
          ease: "elastic.out(1, 0.5)",  // Dramatic elastic easing for bounce effect
        });
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container} ref={containerRef}>
        <div className={styles.description_container}>
          <h1 className={styles.description}>
          Hello! I am a junior full-stack developer from the Philippines. I have a passion for creating dynamic and user-friendly web applications.
          My journey in technology has equipped me with a diverse set of skills, allowing me to work on various aspects of web development, from front-end design to back-end functionality.
          In addition to my development skills, I also produce music and have experience in video editing. I enjoy combining my technical expertise with my creative pursuits, striving to deliver engaging experiences that resonate with users.
          Whether I’m coding a new feature, producing a track, or editing a video, I always aim for excellence in everything I do. I'm excited to continue growing and exploring new technologies and creative outlets, and I look forward to the opportunities that lie ahead.
          </h1>
        </div>
      </div>
      <div className={styles.technologies} ref={techSectionRef}>
        <h1 className={styles.pgLang}> Programming Languages</h1>
        <div className={styles.techSection}>
          <div className={styles.techItem}>
            <Image src="/assets/html-5.svg" className={styles.portrait} width={200} height={200} alt="HTML" />
            <h1>HTML</h1>
          </div>
          <div className={styles.techItem}>
            <Image src="/assets/css.svg" className={styles.portrait} width={200} height={200} alt="CSS" />
            <h1>CSS</h1>
          </div>
          <div className={styles.techItem}>
            <Image src="/assets/js.svg" className={styles.portrait} width={200} height={200} alt="JavaScript" />
            <h1>JavaScript</h1>
          </div>
          <div className={styles.techItem}>
            <Image src="/assets/typescript.svg" className={styles.portrait} width={150} height={150} alt="TypeScript" />
            <h1>TypeScript</h1>
          </div>
          <div className={styles.techItem}>
            <Image src="/assets/python.svg" className={styles.portrait} width={150} height={150} alt="Python" />
            <h1>Python</h1>
          </div>
          <div className={styles.techItem}>
            <Image src="/assets/mysql.svg" className={styles.portrait} width={150} height={150} alt="MySQL" />
            <h1>MySQL</h1>
          </div>
          <div className={styles.techItem}>
            <Image src="/assets/java.svg" className={styles.portrait} width={150} height={150} alt="Java" />
            <h1>Java</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
