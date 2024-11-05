// app/about/page.tsx

import React from 'react';
import styles from '../styles/projects.module.css'; // Adjust the path based on your styles location
import Header
 from '../components/header/header';
const Projects: React.FC = () => {
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
