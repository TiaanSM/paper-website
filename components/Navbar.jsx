"use client"

import styles from './Navbar.module.css'

import { useState, useEffect } from 'react'

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    
  return (
    <div className={styles.nav}>
        <div>
            <span>Paper.</span>
        </div>

        <span>
            <p>DIGITAL SOUL &copy; 2022</p>
        </span>

        <div className={styles.rightContainer}>

            <div className={styles.ctaButton}>
                <span>Let's talk</span>
            </div>

            <div onClick={() => setIsActive(!isActive)} 
                className={isActive ? styles.activeMenu : styles.menu}>
                <span className={isActive ? styles.activeBar1 : styles.bar1}></span>
                <span className={isActive ? styles.activeBar2 : styles.bar2}></span>
            </div>

        </div>
    </div>
  )
}

export default Navbar

/*

 
*/