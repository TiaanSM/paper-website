"use client"
import styles from './Clients.module.css';
import { useInView } from 'react-intersection-observer';
import ClientItem from './ClientItem';

// @refresh reset

const Clients = () => {

    const { ref, inView, entry } = useInView({
        threshold: 0.70,
        triggerOnce: true
    });
    console.log(inView);

  return (
    <section className={styles.mainContainer} ref={ref}>

        <h3 className={styles.title}>CLIENTS</h3>

        <div className={styles.contentContainer} >

            <div className={styles.textContainer}>
                <span className={styles.clientL}>FOCUS.</span>
                <ClientItem 
                    client="SABC."
                    inView={inView} 
                    start="60%"
                    end="40%"
                />
                <ClientItem 
                    client="SIBERIA."
                    inView={inView} 
                    start="35%"
                    end="0%"
                />
            </div>

            <div className={styles.textContainer}>
                <span className={styles.clientL}>IOTA.</span>
                <ClientItem 
                    client="BIKE."
                    inView={inView} 
                    start="69%"
                    end="50%"
                />
                <ClientItem 
                    client="MUSIMANE"
                    inView={inView} 
                    start="35%"
                    end="0%"
                />
            </div>

            <div className={styles.textContainer}>
                <span className={styles.clientL}>DORRY.</span>
                <ClientItem 
                    client="JACKSON"
                    inView={inView} 
                    start="50%"
                    end="0%"
                />
            </div>

            <div className={styles.textContainer2}>
                <span className={styles.clientL}>CONTROLS</span>
                <ClientItem 
                    client="ITACHI."
                    inView={inView} 
                    start="22%"
                    end="0%"
                />
            </div>

        </div>
    </section>
  )
}

export default Clients