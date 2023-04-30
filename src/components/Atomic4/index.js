import React from 'react';
import styles from './Atomic4.module.css';


const Atomic4 = () => {
    return (
        <div className={styles.atomicContainer}>
            <h2 className={styles.atomicContainerTitle}>The Dark Light</h2>
            <p className={styles.atomicContainerSubTitle}>Many variations of passages of Lorem Ipsum willing araise  alteration in some form.</p>
            <div className={styles.atomicContainerDesc}>
                <div className={styles.atomicContainerDescContent}>
                    <div className={styles.atomicContainerDescCircle}></div>
                    <h4 className={styles.atomicContainerDescTitle}>Pages:</h4>
                    <p className={styles.atomicContainerDescSubTitle}>586pages</p>
                </div>
                <div className={styles.atomicContainerDescContent}>
                    <div className={styles.atomicContainerDescCircle}></div>
                    <h4 className={styles.atomicContainerDescTitle}>Length:</h4>
                    <p className={styles.atomicContainerDescSubTitle}>10 Hours</p>
                </div>
            </div>
            <button className={styles.atomicContainerDescButton}>Order Today</button>
        </div>
    );
};

export default Atomic4;