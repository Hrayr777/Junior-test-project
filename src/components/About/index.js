import React from 'react';
import styles from './About.module.css';
import { images } from "../../images";

const About = () => {
    return (
        <div className={styles.about}>
            <h2 className={styles.aboutTitle}>Trusted by the Best</h2>
            <div className={styles.aboutLine}></div>
            <div className={styles.aboutDesc}>
                <div className={styles.aboutDescContent}>
                    <div className={styles.aboutDescContentFon}>
                        <img alt={'corp'} src={images.corp} className={styles.aboutDescContentFonImg}/>
                    </div>
                    <h3 className={styles.aboutDescContentTitle}>Amazen Corp</h3>
                    <p className={styles.aboutDescContentSubTitle}>A long established fact that a who looking at its layout.</p>
                </div>
                <div className={styles.aboutDescContent}>
                    <div className={styles.aboutDescContentFon}>
                        <img alt={'megan'} src={images.megan} className={styles.aboutDescContentFonImg}/>
                    </div>
                    <h3 className={styles.aboutDescContentTitle}>Megan Books</h3>
                    <p className={styles.aboutDescContentSubTitle}>A long established fact that a who looking at its layout.</p>
                </div>
                <div className={styles.aboutDescContent}>
                    <div className={styles.aboutDescContentFon}>
                        <img alt={'los'} src={images.los} className={styles.aboutDescContentFonImg}/>
                    </div>
                    <h3 className={styles.aboutDescContentTitle}>Los Books</h3>
                    <p className={styles.aboutDescContentSubTitle}>A long established fact that a who looking at its layout.</p>
                </div>
                <div className={styles.aboutDescContent}>
                    <div className={styles.aboutDescContentFon}>
                        <img alt={'urban'} src={images.urban} className={styles.aboutDescContentFonImg}/>
                    </div>
                    <h3 className={styles.aboutDescContentTitle}>Urban Lib</h3>
                    <p className={styles.aboutDescContentSubTitle}>A long established fact that a who looking at its layout.</p>
                </div>
            </div>
        </div>
    );
};

export default About;