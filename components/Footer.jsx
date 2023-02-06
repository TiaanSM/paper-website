"use client"
import styles from './Footer.module.css';
import CursorTracker from './CursorTracker';

const Footer = () => {

    const addCursor = () => {
        
    }

  return (

    <footer className={styles.footer}>
        
        <div className={styles.ctaContainer}>
            <CursorTracker />
            <h4 className={styles.cta}>Let's talk.</h4>
        </div>

        <div className={styles.linkContainer}>
            <ul className={styles.socialContainer}>
                <li className={styles.socialLink}>BEHANCE</li>
                <li className={styles.socialLink}>INSTAGRAM</li>
                <li className={styles.socialLink}>LINKDIN</li>
                <li className={styles.socialLink}>MEDIUM</li>
                <li className={styles.socialLink}>TWITTER</li>
            </ul>
            <ul className={styles.policyContainer}>
                <li className={styles.policyLink}>PRIVACY POLICY</li>
                <li className={styles.policyLink}>COOKIES POLICY</li>
                <li className={styles.policyLink}>TERMS & CONDITIONS</li>
            </ul>
        </div>
        <span className={styles.copyright}>&copy;2023 Paper. All rights reserved</span>

    </footer>
  )
}

export default Footer