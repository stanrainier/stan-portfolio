// app/about/page.tsx
'use client';

import React, { useLayoutEffect } from 'react';
import styles from '../styles/projects.module.css'; // Adjust the path based on your styles location
import Header
 from '../components/header/header';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Projects: React.FC = () => {
  const containerRef = useRef(null);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Select all instances of each class
      const headers = document.querySelectorAll(`.${styles.verseGuruDesc}`);
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
            <h1>Verse Guru</h1>
            <span className={styles.verseGuruDesc}>
              A bachelor’s degree capstone project to develop a Bible application using pure Laravel.
              Designed and implemented an interactive interface with search, verse navigation, and
              bookmark features, enhancing my skills in full-stack development and user-centered design.
            </span>
            <h1>IVOS Dormitory Management</h1>
            <span className={styles.ivosDesc}>
              A Dormitory Management System developed as part of a project using vanilla PHP and
              JavaScript. Built an intuitive interface for managing student records, room assignments, and
              payment tracking. This project strengthened my skills in backend logic and frontend
              interactivity without relying on frameworks.
            </span>
        </div>
    </>
  );
};

export default Projects;
