"use client"
import styles from './page.module.css';

import Clients from '@/components/Clients.jsx';

export default function Home() {
  return (
    <main>
      
      <div className={styles.dummy}></div>
      <div className={styles.dummy}></div>
      <Clients />
    </main>
  )
}
