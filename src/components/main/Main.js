import React from "react";
import styles from "./Main.module.css";
export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.headline}>About the Author</h1>

        <p className={styles.description}>
          There are many variations of passages of Lorem Ipsum available, have
          suffered alteration in some form.
        </p>
      </div>
    </div>
  );
}
