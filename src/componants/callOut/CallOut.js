
import React from 'react'
import style from "./callOut.module.scss"
import img from "../../assets/images/Photo.png"
import Button1 from '../button/Button1'


function CallOut(){
  return (
    <div className={style.callOut}>
      <div className={style.content}>
        <div className={style.text}>
          <h3> Get Book Copy Today!</h3>
          <hr />
          <p>This the first true value generator on the Internet. It uses alphas dictionary of over 200 Latin words.</p>
          <Button1 />
        </div>
        <div className={style.img}>
        <img src= {img} alt=''/>
        </div>

      </div>
    </div>
  )
}

export default CallOut