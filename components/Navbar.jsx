"use client"
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = (props) => {

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
    backgroundColor: "white",
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'fixed',
    zIndex: '100',
    transition: 'top 0.6s ease',
    overflow: 'visible',
  }
    
  return (
    <div style={{...navStyles, top: direction === 'up' ? '0' : '-6rem' }}>

      <div className={styles.contentContainer}>

        {isMobile ? <span className={styles.mobileLogo}>P\</span> :
        <Link href="/" className={styles.logo}>Paper<span className={styles.reg}>&reg;</span></Link>
        }
        
        <span className={styles.centerText}>DIGITAL SOUL &copy; 2022</span>

        <div className={styles.rightContainer}>

            <Link href="/contact" className={styles.ctaButton}>
              Let's talk
            </Link>

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
                    <Link href="/" className={styles.bigLogo}>P\</Link>
                </div>
                <ul className={styles.socialsContainer}>
                    <a href="" className={styles.socialLink}>Behance</a>
                    <a href="" className={styles.socialLink}>Twitter</a>
                    <a href="" className={styles.socialLink}>Instagram</a>
                    <a href="" className={styles.socialLink}>Linkdin</a>
                    <a href="" className={styles.socialLink}>Medium</a>
                </ul>
            </div>
 
            <div className={styles.rightMenuContainer}>
                <ul className={styles.linkContainer}>
                  <span className={styles.linkSpan}>
                    <Link href="work" className={openMenu ? styles.animatedNavLink : styles.navLink}>Work</Link>
                  </span>
                  <span className={styles.linkSpan}>
                    <Link href="/services" className={openMenu ? styles.animatedNavLink : styles.navLink}>Services</Link>
                    </span>
                    <span className={styles.linkSpan}>
                    <Link href="/about" className={openMenu ? styles.animatedNavLink : styles.navLink}>About</Link>
                    </span>
                    <span className={styles.linkSpan}>
                    <Link href="/manifesto" className={openMenu ? styles.animatedNavLink : styles.navLink}>Manifesto</Link>
                    </span>
                    <span className={styles.linkSpan}>
                    <Link href="/contact" className={openMenu ? styles.animatedNavLink : styles.navLink}>Contact</Link>
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
