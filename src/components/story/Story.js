import React from "react";
import styles from "./Story.module.css";
export default function Story({ data }) {
  return (
    <div className={styles.story}>
      <div className={styles.content_box}>
        <div className={styles.content}>
          <h1 className={styles.header}>My Story</h1>
          <p className={styles.header_text}>
            Making this the first true generator on the Internet. It uses a
            dictionary of over 200 Latin words, combined with a handful of model
            sentence structures.
          </p>
          <div>
            {data.map((item) => {
              return (
                <div key={item.id} className={styles.container}>
                  <div className={styles.num_box}>
                    <span className={styles.number}>{item.number}</span>
                  </div>
                  <div className={styles.title_box}>
                    <h1 className={styles.title}>{item.title}</h1>
                    <p className={styles.value}>{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.img_box}>
          <img
            className={styles.img}
            src={require("./photos/img_2.jpg")}
            alt="Abraham's look"
          />
        </div>
      </div>
    </div>
  );
}
