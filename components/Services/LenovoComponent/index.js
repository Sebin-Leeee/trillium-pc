import React from 'react';
import styles from './LenovoComponent.module.css';

const LenovoComponent = () => {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.title}>Lenovo Procurement</h1>
            <p className={styles.detail}>TrilliumPC specializes in providing expert guidance
                 for Lenovo procurement, focusing on optimizing hardware configurations and acquiring software solutions that best suit your business needs. Whether you're looking to upgrade existing systems or deploy new infrastructure, our team ensures that your Lenovo investments align perfectly with your operational requirements and budget. With our in-depth knowledge and industry partnerships, we streamline the procurement process, ensuring you receive tailored recommendations and support to enhance your IT environment efficiently and effectively. Trust TrilliumPC to deliver solutions that maximize performance and
                 productivity across your organization.</p>
        </div>
    );
};

export default LenovoComponent;