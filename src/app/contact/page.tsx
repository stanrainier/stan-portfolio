// app/about/page.tsx

import React from 'react';
import styles from '../styles/about.module.css'; // Adjust the path based on your styles location
import Header
 from '../components/header/header';
const Contact: React.FC = () => {
  return (
    <>
    <Header />
        <div className={styles.container}>
            <h1>stanrainiersalazar@gmail.com</h1>
        </div>
    </>
  );
};

export default Contact;
