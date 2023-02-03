"use client"
import styles from './page.module.css';
import Header from '@/components/Header';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Carousel from '@/components/Carousel';
import { useState, useEffect } from 'react';

export default function Home() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);


  return (
    <main>      
      {show ? <Header /> : null}
      <div className={styles.dummy}></div>
      <div className={styles.dummy}></div>
      {show ? <Clients /> : null}
      <div className={styles.dummy}></div>
      <Services />
      <div className={styles.dummy}></div>
      <Carousel />
    </main>
  )
}