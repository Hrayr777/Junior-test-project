import React from 'react';
import styles from './Atomic.module.css';
import Atomic1 from "../Atomic1";
import Atomic2 from "../Atomic2";
import Atomic3 from "../Atomic3";
import Atomic4 from "../Atomic4";

const Atomic = () => {
    return (
        <div className={styles.atomic}>
            <div className={styles.atomicDesc}>
                <h2 className={styles.title}>Author's Book Includes</h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.atomicContent}>
                <Atomic1 />
                <Atomic2 />
                <Atomic3 />
                <Atomic4 />
            </div>
        </div>
    );
};

export default Atomic;