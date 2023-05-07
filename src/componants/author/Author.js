import React from 'react'
import BookDes from '../bookDes/BookDes'
import { data } from "../../data"
import style from "./author.module.scss"

function Author() {
  return (
    <div className={style.author}>
      <div className={style.title}>
        <h2>Author’s Book Includes</h2>
        <hr />
      </div>
      <div className={style.content}>
        {data.map((item, index) => (
          <BookDes img={item.bookImg} bookName={item.bookName} content={item.content} key={index} />
        )
        )}
      </div>
    </div>
  )
}

export default Author