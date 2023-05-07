import React from 'react'
import style from "./about.module.scss"
import author from '../../assets/images/author.jpg'
import qr from "../../assets/images/Vector.jpg"
function About() {
  return (
    <div className={style.about} >
     <div className={style.author}>
          <div className={style.img}>
          <div className={style.border}>
          <img  src={author} alt=""/>
          </div>
          </div>
          <div className={style.content}> 
            <div className={style.titleContent}>
                 <h3 className={style.title}>About Author</h3>
                 <hr/>
                 <p className={style.subTitle}>All the Lorem Ipsum generators on 
                 the Internet tend to repeated predefined chunks as necessary, 
                 making this the first true value generator on the Internet. 
                 It uses a dictionary of over 200 Latin words, combined with a 
                 handful.</p>
            </div>
             <div className={style.list}>
                 <ul>
                  <li className={style.listItem}>
                  <p className={ style.listTitle}>02</p>
                      <p className={style.listText}>Books Published</p>
                  </li>
                  <hr/>
                  <li className={style.listItem}>
                  <p className={ style.listTitle}>4.5</p>
                      <p className={style.listText}>User Reviews</p>

                  </li>
                  <hr/>
                  <li className={style.listItem}>
                   <p className={ style.listTitle}>04</p>

                      <p className={style.listText}>Best Seller Awards</p>
                      
                  </li>
                 </ul>
             </div>
              <div className={style.details}>
                <div className={style.detailsCont}>
                <div className={style.qr}>
                  <img src={qr} alt=''/>
                </div>
                <div className={style.contact}>
                  <h3>John Abraham , Ph.d</h3>
                  <div className={style.address}>
                    <a href="mailto:johnabraham@gmail.com">Mail : johnabraham@gmail.com </a>
                    <a href="tel:(+2) 123 545 9000">Phone : (+2) 123 545 9000</a>
                  </div>
                </div>
                </div>
              </div>
          
          </div>

     </div>
    </div>
  )
}

export default About