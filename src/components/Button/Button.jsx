import styles from './Button.module.css'
import IMG from '../../img'


function Button() {
  return (
    <div className={styles.Button}>
        <div className={styles.quantity}> 1 </div>
        <button className={styles.btn}>
            <div className={styles.content}>
                <img  className = {styles.vector} src = {IMG.vector} alt = ''/>
                <p>Add to Cart</p>
            </div>   
        </button>       
    </div>   
  )
}

export default Button