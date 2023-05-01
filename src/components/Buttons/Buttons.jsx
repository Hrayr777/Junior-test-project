import styles from './Buttons.module.css'



function Buttons() {
  return (
    <div className={styles.Buttons}>
            <button className={styles.left}>PRODUCT DESCRIPTION</button>        
            <button className={styles.right}>ADDITIONAL INFO</button>           
    </div>
  )
}

export default Buttons