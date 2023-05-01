import styles from './FeaturesItem.module.css'



function FeaturesItem({image,title,body}) {
  return (
    <div className={styles.FeaturesItem}>
        <div className={styles.icon}>
            <img src = {image} alt = ''/>
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}

export default FeaturesItem
