import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { GET_FILM } from '../query';
import { useQuery } from '@apollo/client';
export default function Home() {
  const { loading, error, data } = useQuery(GET_FILM);
  console.log('data', data, loading);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to GraphQL demo!!</h1>

        {/*  <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          {/* <a
            href='https://www.apollographql.com/docs/react/get-started'
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about GraphQL features and API.</p>
          </a> */}
          {!loading && data?.allFilms?.films?.length > 0
            ? data?.allFilms?.films.map((data) => (
                <>
                  <a
                    href='https://www.apollographql.com/docs/react/get-started'
                    target='_blank'
                    className={styles.card}
                  >
                    <h2>{data.title}</h2>
                    <p>{`Directed by ${data.director},`}</p>
                    <p>{`It will be released to your near cinema hall on ${data.releaseDate}`}</p>
                  </a>
                </>
              ))
            : null}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
