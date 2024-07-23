import React from 'react';
import styles from './OnSiteSupport.module.css';

const OnSiteSupport = () => {
    return (
        <div className={styles.gridContainer}>
            <h1 className={styles.title}>OnSite Technical Support</h1>
            <p className={styles.detail}>TrilliumPC emphasizes their technical expertise 
                and commitment to customer satisfaction. Their 
                technicians are highly skilled and certified by product 
                manufacturers, ensuring quality performance in the Lower 
                Mainland area. They offer comprehensive technical support,
                 education, and consulting services aimed at maximizing customer 
                 investments. Their support team, staffed with trained engineers, 
                 provides 24/7 multilingual assistance and uses an automated system 
                 to swiftly resolve issues while keeping customers informed throughout 
                 the process. For more details or to contact their technical support, 
                 email <span className={styles.red}>support@trilliumpc.com </span> 
                 or call <span className={styles.red}>604-639-2988</span>.</p>
        </div>
    );
};

export default OnSiteSupport;