import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const About: React.FC = () => {
  return (
    <>
      <Link href='/'>
        <a className={styles.card}>Home &rarr;</a>
      </Link>

      <Link href='/'>
        <a className={styles.card}>Home &rarr;</a>
      </Link>

      <Link href='/'>
        <a className={styles.card}>Home &rarr;</a>
      </Link>

      <Link href='/'>
        <a className={styles.card}>Home &rarr;</a>
      </Link>
    </>
  );
};

export default About;
