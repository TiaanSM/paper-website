"use client"
import styles from './page.module.css';
import ServicesCard from '@/components/servicesCard';

export default function Services() {

  return (
    <main className={styles.main}>    
      <div className={styles.container}>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            We transform ideas into<br/> digital outcomes to elevate<br/> the connection between the<br/> brand and their users.
          </h1>
        </div>

        <ServicesCard 
          number="01."
          title="Strategy and consultancy."
          desc="The strategy and consultancy project is the master plan we develop to accomplish your objectives. We listen, understand and analyse the needs of the business. Then we define a strategy to deliver optimised results so you can move forward."
          listItems="."
        />

        <ServicesCard 
          number="02."
          title="Digital products."
          desc="Digital products are the apps, tools, sites, systems —the list is long— that you use to watch, buy, create, control and manage things digitally. We create functional, intuitive, engaging and visually stunning products to elevate the user's perception of your brand. We also make them scalable so they have the potential to grow and expand."
        />

        <ServicesCard 
          number="03."
          title="Digital-First Branding."
          desc="We define and create digital brands with soul and personality that transmit those intangible values that make the brand recognisable and remembered in many different ways."
        />

        <ServicesCard 
          number="04."
          title="Technology."
          desc="We think technology is a fundamental asset serving the project, and it's crucial during the implementation process. With this in mind, we can define the project's development and choose the right technology to offer the best results to our clients."
        />

      </div>
    </main>
  )
}

/*
 listItems={ items= {id = 1, item = ['cat', 'dog']} }} 
*/