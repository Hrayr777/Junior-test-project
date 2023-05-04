import React from "react";
import styles from "./About.module.css";

export default function About({ categories }) {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.img_box}>
          <img
            className={styles.img}
            src={require("./photos/img_1.jpg")}
            alt="Abraham's look"
          />
        </div>
        <div className={styles.information}>
          <div className={styles.info_box}>
            <div className={styles.title}>
              {categories.map((item) => {
                return <div key={item.id}>{item.title}</div>;
              })}
            </div>
            <div className={styles.value}>
              {categories.map((item) => {
                return <div key={item.id}>{item.value}</div>;
              })}
            </div>
          </div>
          <div className={styles.details}>
            <h1>About Dr.John Abraham</h1>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, that can combined with a handful of model sentence
              structures.
            </p>
            <button>Contact now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
