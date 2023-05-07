import React from 'react'
import style from "./trusted.module.scss"
import LogoContent from '../logo/LogoContent'
import { logoContent } from '../../data'
function Trusted() {
  return (
    <div className={style.trustedBy}>
      <div className={style.title}>
        <h2>Trusted by the Best</h2>
        <hr />
      </div>
      <div className={style.logos}>
        {logoContent.map((item, index) => {
          return (
            <LogoContent logo={item.logo} name={item.name} text={item.text} key={index} />
          )
        })}

      </div>
    </div>
  )
}

export default Trusted