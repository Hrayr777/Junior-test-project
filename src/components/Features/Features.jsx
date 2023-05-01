import styles from './Features.module.css'
import IMG from '../../img'
import FeaturesItem from '../FeaturesItem/FeaturesItem'



function Features() {
  return (
    <div className={styles.Features}>
        <div className='container'>
            <div className={styles.content}>
                <FeaturesItem
                    image = {IMG.icon1} 
                    title =  'Secure Payments'
                    body = 'There are many variations of passages of alteration in some form.'
                />
                <FeaturesItem
                    image = {IMG.icon2} 
                    title =  'Free Shipping'
                    body = 'There are many variations of passages of alteration in some form.'
                />
                <FeaturesItem
                    image = {IMG.icon3} 
                    title =  '100% Satisfactions'
                    body = 'There are many variations of passages of alteration in some form.'
                />
            </div>           
        </div>
      
    </div>

   
  )
}

export default Features