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
        <h1 className={`${styles.title} ${styles.colorful}`}>Hi! I&apos;m Patricia.</h1>
        <section className={styles.section}>
          <p>
            I am a senior front-end developer. I&apos;ve been working professionally in the industry as a developer for almost 15 years and full-time as a <a href="https://dev-cat.com/">freelancer</a> since 2018.
          </p>
          <p>
            My biggest passion lies within Front-end techniques such as JavaScript, CSS and HTML.
            I focus on semantically correct responsive websites which are available for everyone, no matter device or disability.
          </p>
          <p>
            For the past 8 years I&apos;ve been working remotely for several different companies. 
            Remote work fits me the best as I really value the great impact it has on productivity and focus.
          </p>
          <p>
            I&apos;m currently based in Stockholm but have got my second home (and π€) in Berlin where I&apos;ve lived for many years. <br />
            Jag talar svenska πΈπͺ, I speak English π¬π§ und ich spreche Deutsch π©πͺ.
          </p>
        </section>
        <section className={styles.section}>
          <p>
            My passion for building websites started in middle school in 1997 when I got my very first computer πΎ. 
            I was curious to find out why some websites had flashing text moving around all over the place, loud background <span className={styles.strikeThrough}>sounds</span> noises and lots of hysterical GIFs π¦...
            I too wanted all of that on my website!
          </p>
          <p>
            And so it all started; I ended up teaching myself how to develop websites and have since then truly loved to build beautiful things for the web.
          </p>
          <p>
            Except for building websites, I enjoy traveling the world (mainly Asia), ππ» in Berlin clubs, π in the Alps and spending time with my amazing and lovley little family π¨βπ©βπ¦
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.colorful}>CONTACT</h2>
          <p>
            Don&apos;t hesitate to hit me up if you&apos;ve got any questions, want to discuss an upcoming project* or simply just wanna drop me a line π₯³
          </p>
          <small>
            <em>* Please note that I only take on fully remote projects as a Front-end developer, not fullstack nor backend</em> ππ»ββοΈ
          </small>
          <dl className={styles.contactList}>
            <dt>π E-mail:</dt>
            <dd>hello(at)dev-cat.com</dd>
            <dt>π₯ LinkedIn:</dt>
            <dd><a href="http://www.linkedin.com/in/patriciaadamsson">patriciaadamsson</a></dd>
            <dt>π  Github:</dt>
            <dd><a href="https://github.com/adamsdotter">@adamsdotter</a></dd>
          </dl>
        </section>
      </main>
    </div>
  )
}