// components/Header.tsx

import Link from 'next/link';
import styles from '../../styles/header.module.css';



const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Stan Rainier Salazar</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
