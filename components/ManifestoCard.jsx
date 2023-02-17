import styles from './ManifestoCard.module.css';

const ManifestoCard = (props) => {

  return (

    <div className={styles.container}>
        <div className={styles.topContainer}>
            <h2 className={styles.title}>{props.title}</h2>
            <span className={styles.number}>{props.number}</span>
        </div>
        <p className={styles.desc}>{props.desc}</p>
    </div>

  )
}

export default ManifestoCard