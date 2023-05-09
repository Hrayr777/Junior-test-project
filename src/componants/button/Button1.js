import React from 'react'
import style from "./button.module.scss"

const Button1 = ({color}) => {
  return (
    <div className={style.btn1} style={{color:color}} >Order Today</div>
  )
}

export default Button1