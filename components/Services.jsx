import styles from './Services.module.css';

const Services = () => {
  return (
    <section className={styles.section}>

        <div className={styles.mainContainer}>

            <div className={styles.titleContainer}>
                <h3 className={styles.title}>OUR SERVICES.</h3>
            </div>

            <div className={styles.rowContainer}>
            
            <div className={styles.textContainer}>
                <div className={styles.headingContainer}>
                    <h4 className={styles.heading}><span className={styles.number}>01.</span>Strategy and consultancy.</h4>
                </div>
                <div className={styles.descContainer}>
                    <p className={styles.desc}>Lorem ipsum, dolor sit fhgn kgor utro ori epwo wunfs sofiw fjfdk kort shudie pfkdojgdhu deif fidjf slaoe dnief ds amet illo voluptate totam error nesciunt eaque rerum, aut repellat libero natus.</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.headingContainer}>
                    <h4 className={styles.heading}><span className={styles.number}>02.</span>Digital Products.</h4>
                </div>
                <div className={styles.descContainer}>
                    <p className={styles.desc}>Lorem ipsum, dolor sit fhgn kgor utro ori epwo wunfs sofiw fjfdk kort shudie pfkdojgdhu deif fidjf slaoe dnief ds amet illo voluptate totam error nesciunt eaque rerum, aut repellat libero natus.</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.headingContainer}>
                    <h4 className={styles.heading}><span className={styles.number}>03.</span>Digital-first branding.</h4>
                </div>
                <div className={styles.descContainer}>
                    <p className={styles.desc}>Lorem ipsum, dolor sit fhgn kgor utro ori epwo wunfs sofiw fjfdk kort shudie pfkdojgdhu deif fidjf slaoe dnief ds amet illo voluptate totam error nesciunt eaque rerum, aut repellat libero natus.</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.headingContainer}>
                    <h4 className={styles.heading}><span className={styles.number}>04.</span>Technology.</h4>
                </div>
                <div className={styles.descContainer}>
                    <p className={styles.desc}>Lorem ipsum, dolor sit fhgn kgor utro ori epwo wunfs sofiw fjfdk kort shudie pfkdojgdhu deif fidjf slaoe dnief ds amet illo voluptate totam error nesciunt eaque rerum, aut repellat libero natus.</p>
                </div>
            </div>

            </div>

        </div>

    </section>
  )
}

export default Services