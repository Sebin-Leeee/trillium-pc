import React from 'react';
import styles from './BackUpComponent.module.css';

const BackUpComponent = () => {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.title}>Backup & DR Planning</h1>
            <p className={styles.detail}>TrilliumPC Network Solutions specializes in crafting Disaster Recovery Plans (DRP) and Business Continuity Plans (BCP) tailored to safeguard organizations against potential disruptions. A DRP ensures rapid restoration of IT functionalities crucial for business operations post-disaster, whether on-site or off-site. Meanwhile, a BCP focuses on maintaining essential business processes during emergencies like fires or other crises, ensuring continuity and resilience. With extensive experience across diverse sectors such as mining, education, finance, manufacturing, and professional services, TrilliumPC collaborates closely with clients to identify critical services and design robust solutions that mitigate risks and enhance operational stability.</p>
        </div>
    );
};

export default BackUpComponent;