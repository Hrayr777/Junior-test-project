import styles from './Banner.module.css' 


function Banner() {
  return (
    <div className = {styles.Banner}>
        <div className ='container'>
            <div className = {styles.content}>
                <div className = {styles.title}>
                    <p className = {styles.first}>My Store</p>
                    <div className = {styles.line}>
                    </div>
                    <p className = {styles.second}>There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner