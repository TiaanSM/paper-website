import styles from './ServicesCard.module.css';

const servicesCard = (props) => {
  return (
    <section className={styles.section}>

        <div className={styles.titleContainer}>
            <span className={styles.number}>{props.number}</span>
            <h2 className={styles.title}>{props.title}</h2>
        </div>

        <div className={styles.contentContainer}>
            <p className={styles.desc}>
                {props.desc}
            </p>
            <img src="" alt="" className={styles.image} />

                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        {props.listItems.map((item) => {
                            return (
                                <li className={styles.listItem} key={item.toString()}>&bull;{item}</li>
                            )
                        })}
                    </ul>
                </div>
        </div>
    </section>
  )
}

export default servicesCard

/*
{props.listItems.map((listItem) => {
                            return (
                                <li className={styles.listItem}>{listItem}</li>
                            )
                        })}
*/