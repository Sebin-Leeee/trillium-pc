import React from 'react';
import styles from './ManagedServices.module.css';

const ManagedServicesComponent = () => {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.title}>Managed Services</h1>
            <p className={styles.detail}>TrilliumPC specializes in providing comprehensive IT solutions tailored for small to medium-sized businesses. They offer expert consulting, maintenance services, and security solutions to enhance operational efficiency and productivity. By conducting thorough technology assessments, TrilliumPC ensures that their recommendations are aligned with each client's specific business goals. Their services include system installation, monitoring, and ongoing maintenance to prevent disruptions and minimize downtime. TrilliumPC aims to empower businesses with reliable technology support at a fraction of the cost of hiring a full-time IT employee, 
                helping clients leverage technology to stay competitive and achieve long-term success.</p>
        </div>
    );
};

export default ManagedServicesComponent;