"use client"
import styles from './Header.module.css';
import { useInView } from 'react-intersection-observer';

const Header = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0.50,
        triggerOnce: true
    });
    console.log(inView) // remove not triggered inview but op page load complete.

  return (
    <header className={styles.header}>

        <div className={styles.titleContainer} ref={ref}>
            <span className={styles.titleSpan}>
                <span className={inView ? styles.animatedTitle : styles.title}>WE TRANSFORM</span>
            </span>
            <span className={styles.titleSpan}>
                <span className={inView ? styles.animatedTitle : styles.title}>IDEAS INTO DIGITAL</span> 
            </span>
            <span className={styles.titleSpan}>
                <span className={inView ? styles.animatedTitle : styles.title}>OUTCOMES</span>
            </span>
        </div>

        <div className={styles.videoContainer}>
            <img src="" alt="video" className={styles.video} />
        </div>

        <div className={styles.descContainer}>
            <h1 className={styles.desc}>We are an award-winning strategic design company that<br/>
                provides consultancy services worldwide. Our team consists of<br/>
                a superb blend of thinkers, strategists, designers, researchers,<br/>
                developers and organisers. Not too big, not too small, quite<br/>
                sensible and completely independent.
            </h1>
        </div>

    </header>
  )
}

export default Header