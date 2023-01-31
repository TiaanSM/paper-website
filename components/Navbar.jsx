"use client"

import styles from './Navbar.module.css'

import { useState, useEffect } from 'react'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
        setOpenMenu(!openMenu);
    }
    
  return (
    <div className={styles.nav}>

      <div className={styles.contentContainer}>
        
        <span className={styles.logo}>Paper<span className={styles.reg}>&reg;</span></span>
        
        <span className={styles.centerText}>DIGITAL SOUL &copy; 2022</span>

        <div className={styles.rightContainer}>

            <div className={styles.ctaButton}>
                <span>Let's talk</span>
            </div>

            <div onClick={handleMenuClick} 
                className={isActive ? styles.activeMenu : styles.menu}>
                <span className={isActive ? styles.activeBar1 : styles.bar1}></span>
                <span className={isActive ? styles.activeBar2 : styles.bar2}></span>
            </div>
       
        </div>

      </div>
   
      <div className={openMenu ? styles.openMenu : styles.closedMenu}>

        <div className={styles.mainMenuContainer}> 

            <div className={styles.leftMenuContainer}>
                <div className={styles.bigLogoContainer}>
                    <span className={styles.bigLogo}>P\</span>
                </div>
                <ul className={styles.socialsContainer}>
                    <li className={styles.socialLink}>Behance</li>
                    <li className={styles.socialLink}>Twitter</li>
                    <li className={styles.socialLink}>Instagram</li>
                    <li className={styles.socialLink}>Linkdin</li>
                    <li className={styles.socialLink}>Medium</li>
                </ul>
            </div>
 
            <div className={styles.rightMenuContainer}>
                <ul className={styles.linkContainer}>
                    <li className={styles.navLink}>Work</li>
                    <li className={styles.navLink}>Services</li>
                    <li className={styles.navLink}>About</li>
                    <li className={styles.navLink}>Manifesto</li>
                    <li className={styles.navLink}>Contact</li>
                </ul>
            </div>

        </div>

        <div className={styles.footerMenuContainer}>

                <span className={styles.footerLinkContainer}>
                    <p className={styles.footerLink}>Privacy policy</p>
                    <p className={styles.footerLink}>Cookies policy</p>
                    <p className={styles.footerLink}>Terms & Conditions</p>
                </span>

                <span className={styles.emailLink}>hello@paper.fakemail</span>
        </div>

      </div>

    </div>
  )
}

export default Navbar
