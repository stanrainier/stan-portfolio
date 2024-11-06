// app/about/page.tsx
'use client';
import React, { useLayoutEffect } from 'react';
import styles from '../styles/about.module.css'; // Adjust the path based on your styles location
import Header
 from '../components/header/header';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About: React.FC = () => {

  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Select all instances of each class
      const headers = document.querySelectorAll(`.${styles.description}`);
      const portraits = document.querySelectorAll(`.${styles.ivosDesc}`);
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
    <>
    <Header />
        <div className={styles.container}>
          <div className={styles.description_container}>
            <h1 className={styles.description}>
              Hello! I am a junior full-stack developer from the Philippines. I have a passion for creating dynamic and user-friendly web applications. 
              <br></br>
              <br></br>
              My journey in technology has equipped me with a diverse set of skills, allowing me to work on various aspects of web development, from front-end design to back-end functionality.
              <br></br>
              <br></br>
              In addition to my development skills, I also produce music and have experience in video editing. I enjoy combining my technical expertise with my creative pursuits, striving to deliver engaging experiences that resonate with users. 
              <br></br>
              <br></br>
              Whether I’m coding a new feature, producing a track, or editing a video, I always aim for excellence in everything I do.
              I'm excited to continue growing and exploring new technologies and creative outlets, and I look forward to the opportunities that lie ahead.
            </h1>
          </div>
        </div>
    </>
  );
};

export default About;
