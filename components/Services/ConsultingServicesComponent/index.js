import React from 'react';
import styles from './ConsultingServicesComponent.module.css';

const ConsultingServicesComponent = () => {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.title}>Consulting Services</h1>
            <p className={styles.detail}>At TrilliumPC, our approach goes beyond mere sales; we prioritize aligning hardware, software, and solutions with your business goals. By taking the time to understand your vision, we collaborate with cross-functional teams of stakeholders to ensure every recommendation and implementation delivers maximum value to your organization. Our services include onsite assessments of your current infrastructure, crafting technology roadmaps tailored to your growth trajectory, and conducting thorough security risk assessments with effective remediation strategies. Count on us to empower your business with strategic IT solutions that foster efficiency, security, and sustained growth.</p>
        </div>
    );
};

export default ConsultingServicesComponent;