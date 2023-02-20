"use client"
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
        setOpenMenu(!openMenu);
    }

    const isMobile = window.innerWidth < 575;

    // navbar sticky
  
    let oldScrollY = 0;

  const [direction, setDirection] = useState('up');

  const controlDirection = () => {
    if(window.scrollY > oldScrollY) {
        setDirection('down');
    } else {
        setDirection('up');
    }
    oldScrollY = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);
    return () => {
        window.removeEventListener('scroll', controlDirection);
    };
  },[]);

  useEffect(() => {
    window.addEventListener('scroll', controlDirection);

    return () => window.removeEventListener('scroll', controlDirection);

  }, []);

  const navStyles = {
    width: '100vw',
    height: '6rem',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '100',
    transition: 'top 0.6s ease',
    overflow: 'visible',
    boxShadow: '1px 1px 6px lightgray'
  }
    
  return (
    <div style={{...navStyles, top: direction === 'up' ? '0' : '-6rem' }}>

      <div className={styles.contentContainer}>

        {isMobile ? <span className={styles.mobileLogo}>P\</span> :
        <span className={styles.logo}>Paper<span className={styles.reg}>&reg;</span></span>
        }
        
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

            <div className={openMenu ? styles.animatedLeftContainer : styles.leftMenuContainer}>
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
                  <span className={styles.linkSpan}>
                    <li className={openMenu ? styles.animatedNavLink : styles.navLink}>Work</li>
                  </span>
                  <span className={styles.linkSpan}>
                    <li className={openMenu ? styles.animatedNavLink : styles.navLink}>Services</li>
                    </span>
                    <span className={styles.linkSpan}>
                    <li className={openMenu ? styles.animatedNavLink : styles.navLink}>About</li>
                    </span>
                    <span className={styles.linkSpan}>
                    <li className={openMenu ? styles.animatedNavLink : styles.navLink}>Manifesto</li>
                    </span>
                    <span className={styles.linkSpan}>
                    <li className={openMenu ? styles.animatedNavLink : styles.navLink}>Contact</li>
                    </span>
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
