import React from 'react';
import styles from './ProfessionalServicesComponent.module.css';

const ProfessionalServicesComponent = () => {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.title}>Professional Services</h1>
            <p className={styles.detail}>TrilliumPC Network Solutions specializes
                 in upgrading existing infrastructure, including phone systems, 
                 networking equipment, and Windows infrastructure, tailored to enhance 
                 efficiency and adaptability. We excel in managing datacentre moves and 
                 sizing projects with precision to support your growth seamlessly. 
                 Our Office 365 consulting services optimize collaboration and productivity, 
                 while our expertise in cloud migrations, encompassing public, private, and hybrid configurations, ensures a smooth transition with enhanced scalability and operational efficiency. Trust TrilliumPC to elevate your IT infrastructure and support your business goals effectively. Contact us today to learn more about our tailored IT solutions.
</p>
        </div>
    );
};

export default ProfessionalServicesComponent;