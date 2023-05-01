import Buttons from '../Buttons/Buttons'
import styles from './SubContent.module.css'



function SubContent() {
  return (
    <div className={styles.SubContent}>
        <Buttons />
        <div className={styles.description}>
            <div className={styles.first}>
                <h3>Do you offer discounts for education?</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, bypassed injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className={styles.second}>
                <h3>Is this book for me?</h3>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
            </div>
        </div>   
    </div>
  )
}

export default SubContent