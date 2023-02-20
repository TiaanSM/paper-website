"use client"
import styles from './page.module.css';
import WorkCard from '@/components/WorkCard';

export default function Work() {

  const isMobile = window.innerWidth > 575;

  return (
    <main className={styles.main}>    
    <div className={styles.container}>

      <header className={styles.header}>

        <div className={styles.filterContainer}>

          <ul className={styles.textContainer}>
            <li className={styles.filter}>All<span className={styles.filterAmount}>(11)</span></li>
            <span className={styles.divider}>--</span>
            <li className={styles.filter}>Strategic design.<span className={styles.filterAmount}>(10)</span></li>
            <span className={styles.divider}>--</span>
            <li className={styles.filter}>Digital products.<span className={styles.filterAmount}>(9)</span></li>
            <span className={styles.divider}>--</span>
            <li className={styles.filter}>Branding.<span className={styles.filterAmount}>(9)</span></li>
          </ul>

          <ul className={styles.textContainer}>
            <li className={styles.filter}>Consultancy.<span className={styles.filterAmount}>(8)</span></li>
            <span className={styles.divider}>--</span>
            <li className={styles.filter}>Experiences.<span className={styles.filterAmount}>(4)</span></li>
            <span className={styles.divider}>--</span>
            <li className={styles.filter}>Technology.<span className={styles.filterAmount}>(7)</span></li>
          </ul>

        </div>

      </header>

      <section className={styles.section}>
        <div className={styles.cardContainer}>
            <WorkCard ratio="2/3.25" title="BRAND NAME HERE" />
        </div>
        <div className={styles.cardContainer}>
            <WorkCard ratio="1/1"  title="BRAND NAME HERE" />
        </div>
      </section>

      <div className={styles.bigSection}>
        <WorkCard ratio="16/11" title="BRAND NAME HERE" />
      </div>

      <section className={styles.section}>
        <div className={styles.cardContainer}>
            <WorkCard ratio="1/1" title="BRAND NAME HERE" />
        </div>
        <div className={styles.cardContainer}>
            <WorkCard ratio="2/3.25" title="BRAND NAME HERE" />
        </div>
      </section>

      <div className={styles.bigSection}>
        <WorkCard ratio="16/11" title="BRAND NAME HERE" />
      </div>

      <section className={styles.section}>
        <div className={styles.cardContainer}>
            <WorkCard ratio="2/3.25" title="BRAND NAME HERE" />
        </div>
        <div className={styles.cardContainer}>
            <WorkCard ratio="1/1" title="BRAND NAME HERE" />
        </div>
      </section>

      <div className={styles.bigSection}>
        <WorkCard ratio="16/11" title="BRAND NAME HERE" />
      </div>

      <section className={styles.section}>
        <div className={styles.cardContainer}>
            <WorkCard ratio="1/1" title="BRAND NAME HERE" />
        </div>
        <div className={styles.cardContainer}>
            <WorkCard ratio="2/3.25" title="BRAND NAME HERE" />
        </div>
      </section>

    </div>

    </main>
  )
}