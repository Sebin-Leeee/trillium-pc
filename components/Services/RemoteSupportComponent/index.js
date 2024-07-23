import React from 'react';
import styles from './RemoteSupportComponent.module.css';

const RemoteSupportComponent = () => {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.title}>Remote Support</h1>
            <p className={styles.detail}>Minimizing downtime is crucial for business efficiency. Our remote support ensures rapid response, virtually "onsite" in under 2 minutes, to swiftly resolve issues and keep your operations running smoothly. For proactive IT management, explore our Live Virtual Helpdesk and Managed Services.</p>
        </div>
    );
};

export default RemoteSupportComponent;