"use client"
import styles from './page.module.css';
import Header from '@/components/Header';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import Carousel from '@/components/Carousel';


export default function Home() {

  return (
    <main className={styles.main}>      
      <Header />
      <Services />
      <Clients />
      <Carousel />
    </main>
  )
}
/*
import { useState, useEffect } from 'react';
const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  }, []);

{show ? <Header /> : null }
{show ? <Clients /> : null }
*/