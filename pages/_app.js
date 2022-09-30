import Head from 'next/head';
import { Navbar } from '../components/Navbar/Navbar';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.grid}>
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  );
}

export default MyApp;
