import styles from './Carousel.module.css';

const Carousel = () => {
  return (
    <section className={styles.section}>

        <div className={styles.carousel}>

            <div className={styles.controlsContainer}>
                <div className={styles.titleContainer}>
                    <h5 className={styles.title}>SELECTED WORK.</h5>
                </div>
                <div>
                    buttons
                </div>
            </div>

            <div className={styles.carouselImages}>

                <div className={styles.contentContainer}>
                    <div className={styles.imageContainer}>
                        <img src="" alt="" />
                    </div>
                    <span className={styles.brandContainer}>
                        <h6 className={styles.brand}>Brand name</h6>
                    </span>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Carousel