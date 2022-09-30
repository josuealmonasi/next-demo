import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Link href='about' className={styles.card}>
        <a className={styles.card}>About &rarr;</a>
      </Link>
    </>
  );
}
