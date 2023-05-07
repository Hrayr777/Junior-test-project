import React from 'react'
import style from "./page.module.scss"
import Author from '../../componants/author/Author'
import About from '../../componants/about/About'
import Trusted from '../../componants/trusted/Trusted'
 
 
function Page() {
  return (
    <div className={style.page}>
      <div className={style.author}><Author/></div>
      <div className={style.about}><About/></div>
      <div className={style.trusted}><Trusted/></div>
    </div>
  )
}

export default Page