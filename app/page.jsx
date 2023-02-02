"use client"
import styles from './page.module.css';
import Clients from '@/components/Clients';
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
      <div className={styles.dummy}></div>
      <div className={styles.dummy}></div>
      {show ? <Clients /> : null}
      <div className={styles.dummy}></div>
      <div className={styles.dummy}></div>

    </main>
  )
}