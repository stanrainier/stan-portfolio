import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.bigHeader}>
            Full Stack Developer
          </div>
          <Image src="/assets/me.JPG" alt="Portrait" className={styles.portrait} />
          <div className={styles.bigHeader2}>
            Angular Framework Prodigy
          </div>
        </main>
      </div>
    </>
  );
}
