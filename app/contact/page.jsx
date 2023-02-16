"use client"
import styles from './page.module.css';

export default function Work() {

  return (
    <main className={styles.main}>    

        <header className={styles.header}>
            <div className={styles.infoContainer}>
                <span className={styles.label}>DROP US A LINE</span>
                <span className={styles.email}>hello@paper.fakeMail</span>

                <span className={styles.label}>VISIT US</span>
                <span className={styles.address}>Nostreet Western Cape<br/>Cape Town, 7764<br/>South Africa</span>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>WE'D LOVE TO HEAR FROM YOU.</h1>
                <p className={styles.desc}>Whether you want to tell us about a project, join our team, or just say hi, write to us!
                    We'd love to hear from you.
                </p>
            </div>
        </header>

        <section className={styles.section}>
            <form className={styles.form}>
                <div>
                    <span>Name</span>
                    <span>Email address</span>
                    <span>Company</span>
                    <span>Tell us about your project</span>
                </div>
                <div>
                    <span>I have read and agree with Paper's privacy policy.</span>
                    <div>
                        <span>NO</span>
                        <span>YES</span>
                    </div>
                </div>
                <div>
                    <p>This site is protected by reCAPTCHA
                        and the Google Privacy Policy and
                        Terms of Service apply.
                    </p>
                    <button>SEND</button>
                </div>
            </form>
        </section>

        <aside>
            <span>FOLLOW US</span>
        </aside>

    </main>
  )
}