"use client"
import styles from './Clients.module.css';
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';

const Clients = () => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1.00,
        triggerOnce: true
    });
      console.log(inView);

  return (
    <section className={styles.mainContainer}>

        <h3 className={styles.title}>CLIENTS</h3>

        <div className={styles.contentContainer} ref={ref}>

            <div className={styles.textContainer}>
                <span className={styles.clientL}>FOCUS.</span>
                <span className={inView ? styles.animatedClient1 : styles.client1}>SABC.</span>
                <span className={inView ? styles.animatedClient2 : styles.client2}>SIBERIA</span>
            </div>

            <div className={styles.textContainer}>
                <span className={styles.clientL}>IOTA.</span>
                <span className={inView ? styles.animatedClient3 : styles.client3}>BIKE.</span>
                <span className={inView ? styles.animatedClient4 : styles.client4}>MUSIMANE</span>
            </div>

            <div className={styles.textContainer}>
                <span className={styles.clientL}>DORRY.</span>
                <span className={inView ? styles.animatedClient5 : styles.client5}>JACKSON</span>
            </div>

            <div className={styles.textContainer2}>
                <span className={styles.clientL}>CONTROLS</span>
                <span className={inView ? styles.animatedClient6 : styles.client6}>ITACHI.</span>
            </div>

        </div>
    </section>
  )
}

export default Clients