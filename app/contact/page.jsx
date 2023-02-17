"use client"
import styles from './page.module.css';

export default function Contact() {

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
                <div className={styles.inputContainer}>
                    <span className={styles.input}>Name</span>
                    <span className={styles.input}>Email address</span>
                    <span className={styles.input}>Company</span>
                    <span className={styles.input}>Tell us about your project</span>
                </div>
                <div className={styles.termsContainer}>
                    <span className={styles.termsText}>I have read and agree with Paper's privacy policy.</span>
                    <div className={styles.btnContainer}>
                        <span className={styles.noBtn}>NO</span>
                        <span className={styles.yesBtn}>YES</span>
                    </div>
                </div>
                <div className={styles.submitContainer}>
                    <p className={styles.submitText}>This site is protected by reCAPTCHA
                        and the Google Privacy Policy and
                        Terms of Service apply.
                    </p>
                    <button className={styles.submitBtn}>SEND</button>
                </div>
            </form>
        </section>

        <aside className={styles.aside}>
            <span className={styles.asideTitle}>FOLLOW US</span>
            <ul className={styles.socialsContainer}>
                <li className={styles.socialLink}>BEHANCE</li>
                <li className={styles.socialLink}>TWITTER</li>
                <li className={styles.socialLink}>INSTAGRAM</li>
                <li className={styles.socialLink}>LINKDIN</li>
            </ul>
        </aside>

        <div className={styles.policyContainer}>
            <span className={styles.policyLink}>PRIVACY POLICY</span>
            <span className={styles.policyLink}>COOKIES POLICY</span>
            <span className={styles.policyLink}>TERMS & CONDITIONS</span>
            <span className={styles.copyright}>&copy;2023 Paper. All rights reserved</span>
        </div>

    </main>
  )
}