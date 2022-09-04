import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home of Patricia Adamsson</title>
        <meta name="description" content="Home of Patricia Adamsson" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi! I am Patricia.</h1>
        <section className={styles.section}>
          <p>
            I'm a senior front-end developer. I've been working professionally in the industry as a developer for more than 14 years and full-time as a <a href="https://dev-cat.com/">freelancer</a> since 2018.
          </p>
          <p>
            My biggest passion lies within Front-end techniques such as JavaScript, CSS and HTML.
            I focus on semantically correct responsive websites which are available for everyone, no matter device or disability.
            The past years I've been working mainly with React and Vue.
          </p>
          <p>
            I am based in both Stockholm and Berlin. 
            For the past 8 years I've been working remotely for several different companies. 
            Remote work fits me the best as I really value the great impact it has on productivity and focus.
          </p>
        </section>
      </main>
    </div>
  )
}
