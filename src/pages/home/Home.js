import React from 'react'
import style from "./home.module.scss"
import Button from '../../componants/button/Button'


function Home() {

  return (
    <div className={style.home}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.title}>
            <div className={style.dec}>
              <p className={style.line}></p>
              <p className={style.subTitle}>Welcome to Pages</p>
            </div>
            <h1 className={style.h1}> Books are uniquely portable magic </h1>
            <p className={style.content__text}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div className={style.button}>
            <Button  />
            <a className={style.btn__link} href="#" >Read Free Demo</a>
          </div>
          <div className={style.list}>
            <ul>
              <li>
                <p className={style.describe}> Pages:</p>
                <p>586pages</p>
              </li>
              <li>
                <p className={style.describe}>Length:</p>
                <p>10 Hours</p>
              </li>
              <li>
                <p className={style.describe}>Ratings:</p>
                <p>4.5/5 (305 ratings)</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.bookImg}></div>
      </div>

    </div>
  )
}

export default Home