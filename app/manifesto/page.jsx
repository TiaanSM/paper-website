"use client"
import styles from './page.module.css';
import ManifestoCard from '@/components/ManifestoCard';

export default function Manifesto() {

  return (
    <main className={styles.main}>  

        <div className={styles.mainContainer}>

            <div className={styles.sideTextContainer}>
                <h2 className={styles.sideText}>
                Over the years we've
                thought a lot about how we
                balance being good humans
                with doing good work and
                running a good business.
                <br/><br/>
                — This is our Manifesto.
                </h2>
            </div>

            <div className={styles.mainCardContainer}>

                <div className={styles.cardContainer}>
                    <ManifestoCard 
                        title="Put people first." 
                        number="01."
                        desc="It's our design philosophy, and the way we approach our work, our team and our clients." />
                </div>

                <div className={styles.cardContainer}>
                    <ManifestoCard 
                        title="Make great work." 
                        number="02."
                        desc="We're obsessive about quality. Our work has to be great, otherwise, why bother?" />
                </div>

                <div className={styles.cardContainer}>
                    <ManifestoCard
                        title="See the bigger picture." 
                        number="03."
                        desc="Understanding where you're coming from helps us to go in the right direction together."/>
                </div>

                <div className={styles.cardContainer}>
                    <ManifestoCard 
                        title="Think globally." 
                        number="04."
                        desc="Our international clients and colleagues inspire us with new perspectives on work and life."/>
                </div>

                <div className={styles.cardContainer}>
                    <ManifestoCard 
                        title="Never stop learning." 
                        number="05."
                        desc="Technology moves fast. Design moves on. So it's important to keep learning. It's fun too."/>
                </div>

                <div className={styles.cardContainer}>
                    <ManifestoCard 
                        title="Do the right thing." 
                        number="06."
                        desc="For example, we pay our team fairly and on time. It's simple respect. We expect the same from our clients."/>
                </div>

            </div>

        </div>
    </main>
  )
}