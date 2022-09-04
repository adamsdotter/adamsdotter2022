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
        <h1 className={`${styles.title} ${styles.colorful}`}>Hi! I am Patricia.</h1>
        <section className={styles.section}>
          <p>
            I'm a senior front-end developer. I've been working professionally in the industry as a developer for more than 14 years and full-time as a <a href="https://dev-cat.com/">freelancer</a> since 2018.
          </p>
          <p>
            My biggest passion lies within Front-end techniques such as JavaScript, CSS and HTML.
            I focus on semantically correct responsive websites which are available for everyone, no matter device or disability.
          </p>
          <p>
            For the past 8 years I've been working remotely for several different companies. 
            Remote work fits me the best as I really value the great impact it has on productivity and focus.
          </p>
          <p>
            I'm currently based in Stockholm but have got my second home in Berlin where I've lived for many years. <br />
            Jag talar svenska, I speak English und ich spreche Deutsch.
          </p>
        </section>
        <section className={styles.section}>
          <p>
            My passion for building websites started in middle school in 1997 when I got my very first computer. 
            I was curious to find out why some websites had flashing text moving around all over the place, loud background sounds and lots of hysterical GIFs...
            I too wanted that on my website!
          </p>
          <p>
            And so it all started; I ended up teaching myself how to develop websites and have since then truly loved to build beautiful things for the web.
          </p>
          <p>
            Except for building websites I enjoy traveling the world (mainly Asia), dancing in Berlin clubs, snowboarding in the Alps and spending time with my amazing and lovley little family. 
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.colorful}>CONTACT</h2>
          <p>
            Don't hesitate to hit me up if you've got any questions, want to discuss an upcoming project* or simply just wanna drop me a line 🥳
          </p>
          <em>
            <small>* Please note that I only take on fully remote projects as a Front-end developer, not fullstack nor backend</small>
          </em>
          <dl>
            <dt>E-mail:</dt>
            <dd>hello(at)dev-cat.com</dd>
            <dt>LinkedIn:</dt>
            <dd><a href="http://www.linkedin.com/in/patriciaadamsson">patriciaadamsson</a></dd>
            <dt>Github:</dt>
            <dd><a href="https://github.com/adamsdotter">@adamsdotter</a></dd>
          </dl>
        </section>
      </main>
    </div>
  )
}