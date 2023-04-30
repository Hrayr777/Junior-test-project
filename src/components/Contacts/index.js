import React from 'react';
import styles from './Contacts.module.css';
const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsContent}>
                <h2 className={styles.contactsTitle}>Read a free chapter</h2>
                <div className={styles.contactsLine}></div>
                <p className={styles.contactsSubTitle}>Making this the first true value generator on the Internet. It of over 200</p>
                <p className={styles.contactsSubTitle}>Latin words, combined with a handful.</p>
                <div className={styles.contactsForm}>
                    <input className={styles.contactsFormInput} placeholder={'Your Email id...'}/>
                    <button className={styles.contactsFormButton}>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;