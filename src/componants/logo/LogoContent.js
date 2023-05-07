import React from 'react'
import style from './logoContent.module.scss'

function LogoContent({logo,name,text}) {
  return (
    <div className={style.logo}>
    {logo} 
    <h4>{name}</h4>
    <p>{text}</p>
    </div>
  )
}

export default LogoContent