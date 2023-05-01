import React from 'react';
import styles from './Atomic1.module.css';
import { images } from "../../images";

const Atomic1 = () => {
    return (
        <div className={styles.atomicContainer}>
            <div className={styles.atomicFon}><img className={styles.atomicFonImg} src={images.atomicFon}/></div>
            <div><img className={styles.atomicTitle} src={images.atomicTitle}/></div>
            <p className={styles.atomicText}>A long established fact that a reader normal as well distribution of letters</p>
            <div className={styles.atomicTrees}><img src={images.trees}/></div>
            <p className={styles.atomicSubTitle}>John Abraham</p>
            <p className={styles.atomicSpan}>A supreme packages and web page editors.</p>
            <div className={styles.atomicCircleDiv}>
                <span className={styles.spanLeft}>****************</span>
                <div className={styles.atomicCircle}></div>
                <span className={styles.spanRight}>****************</span>
            </div>
        </div>
    );
};

export default Atomic1;