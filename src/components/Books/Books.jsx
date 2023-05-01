import styles from './Books.module.css' 
import IMG from '../../img'
import Button from '../Button/Button'
import SubContent from '../SubContent/SubContent'


function Books() {
  return (
    <div className = {styles.Books}>
        <div className = 'container'>
            <div className = {styles.content}>
                <img src = {IMG.img} alt = ''/>
                <div className = {styles.right} >
                    <div className = {styles.up} >
                        <div className={styles.title}>
                            <p>The Atomic One’s</p>
                            <div><span>$30.</span><span className={styles.second}>00 USD</span>
                            </div> 
                        </div>  
                        <div className = {styles.text} >
                            <p>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum.</p>
                            <ul className={styles.publisher}>
                                <li>Publisher &nbsp;&nbsp; : &nbsp;&nbsp; Learning Private Limited (1 January 2021)</li>
                                <li>Language &nbsp;&nbsp; : &nbsp;&nbsp; English</li>
                                <li>Paperback &nbsp;&nbsp; : &nbsp;&nbsp; 212 pages</li>
                                <li>SBN-10 &nbsp;&nbsp; : &nbsp;&nbsp; 9788120345799</li>
                                <li>Dimensions &nbsp;&nbsp; : &nbsp;&nbsp; 20 x 14 x 4 cm</li>
                            </ul>     
                        </div>                                   
                    </div>  
                    <Button />
                   
                </div>
            </div>        
            <SubContent />
       
        </div>  
    </div>
  )
}

export default Books