import React from 'react'
import style from "./button.module.scss"

function Button() {
  return (
    <div>
      <button className={style.btn}  >Order Today</button>
    </div>
  )
}

export default Button