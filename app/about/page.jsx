"use client"
import styles from './page.module.css';
import Clients from '@/components/Clients';

export default function Contact() {

  return (
    <main className={styles.main}>  
        <div className={styles.container}>

            <header className={styles.header}>
                <h1 className={styles.headerTitle}>We are humans creating<br/> remarkable digital products<br/> and brands for other humans.</h1>
                <img src="" alt="" className={styles.headerImage} />
                <h2 className={styles.headerDesc}>
                Paper is a strategic design agency focused on providing high-quality digital services for global companies. Our team consists of a superb blend of thinkers, strategists, designers, researchers, developers and organisers. Not too big, not too small, quite sensible and completely independent.
                </h2>
            </header>

            <div className={styles.contentContainer}>
                <div className={styles.contentImageContainer}>
                    <img src="" alt="" className={styles.contentImage} />
                </div>

                <div className={styles.contentTextContainer}>
                    <h3 className={styles.contentTitle}>Best. User. Experience. Ever.</h3>
                    <p className={styles.contentDesc}>
                    At least, that's what we aim for. Our goal for every project is the same: to elevate the connection between brands and consumers through our services. We specialise in product design, project strategy and consultancy, digital-first branding and technology.
                    </p>
                </div>
            </div>

            <div className={styles.peopleContainer}>
                <div className={styles.peopleImageContainer}>
                    <img src="" alt="" className={styles.peopleImage1} />
                    <p className={styles.peopleText}>It's all about the people, people.</p>
                </div>

                <div className={styles.peopleImageContainer}>
                    <img src="" alt="" className={styles.peopleImage2} />
                </div>
            </div>

            <div className={styles.mainTextContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.leftText}>
                    We put people first. Everything else flows from there. There are user people, who are the heart of our user-experience design approach. Then, there are team people, who give their best in every phase of the project. This last group is committed to other people, aka clients, who we also consider to be our people. See our work
                    </p>
                </div>
                <div className={styles.textContainer}>
                    <h4 className={styles.rightTextTitle}>If you're gonna do it, do it right, right?</h4>
                    <p className={styles.rightText}>
                    Clients choose us because we develop projects that focus on quality. We don't act fast and think later, as often happens. We founded Plastic because we like to see the bigger picture. We appreciate what we do, and we like to work with clients and teams that share this crucial yet straightforward philosophy: If you're going to do it, do it right!
                    </p>
                </div>
            </div>

            <Clients/>
        
            <div className={styles.bottomContainer}>
                <h5 className={styles.bottomTitle}>An important commitment to our clients.</h5>
                <div className={styles.bottomTextContainer}>

                    <div className={styles.subjectContainer}>
                        <h6 className={styles.subjectTitle}>01.<br/> Data privacy compliance.</h6>
                        <p className={styles.subjectDesc}>We audit ourselves annually to ensure that our processes meet the standards and requirements for international data privacy (data privacy compliance certification).</p>
                    </div>

                    <div className={styles.subjectContainer}>
                        <h6 className={styles.subjectTitle}>02.<br/> Ethical code.</h6>
                        <p className={styles.subjectDesc}>Our commitment to the people we work with drives us to create a professional, healthy and humane work environment.</p>
                    </div>

                    <div className={styles.subjectContainer}>
                        <h6 className={styles.subjectTitle}>03.<br/> Committed to climate change.</h6>
                        <p className={styles.subjectDesc}>We want to generate a positive impact for people and the planet. This is why our processes are focused on minimising the carbon footprint and generating dynamics and sustainable structures.</p>
                    </div>

                </div>
            </div>

        </div>
    </main>
  )
}