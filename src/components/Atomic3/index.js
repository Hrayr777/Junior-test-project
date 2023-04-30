import React from 'react';
import styles from './Atomic3.module.css';
import { images } from "../../images";


const Atomic3 = () => {
    return (
        <div className={styles.atomicContainer}>
            <div className={styles.atomicDesc}>
                <div className={styles.atomicDescFirstLine}>
                    <p className={styles.atomicDescFirstLineText}>THE DARK</p>
                </div>
                <div className={styles.atomicDescSecondLine}>
                    <p className={styles.atomicDescSecondLineText}>LIGHT</p>
                </div>
            </div>
            <p className={styles.atomicSubTitle}>
                There are many variations of passages of Lorem Ipsum  majority have suffered alteration in some form.
            </p>
            <div className={styles.atomicDescLine}>
                <div className={styles.atomicDescLineLeft}></div>
                <p className={styles.atomicDescLineSpan}>*</p>
                <div className={styles.atomicDescLineRight}></div>
            </div>
            <div className={styles.atomicDescFon}>
                    <img alt={'lamp'} src={images.lamp}/>
                <div className={styles.atomicDescParentCircle}>
                    <div className={styles.atomicDescChildCircle}>
                        <p className={styles.atomicDescCircleText1}>Majority</p>
                        <p className={styles.atomicDescCircleText2}>The majority have suffered alteration in some form.</p>
                    </div>
                </div>
            </div>
            <div className={styles.atomicDescTitleDiv}>
                <h2 className={styles.atomicDescTitle}>-John Abraham-</h2>
                <p className={styles.atomicDescSubTitle}>The majority have suffered alteration in some form.</p>
            </div>
        </div>
    );
};

export default Atomic3;