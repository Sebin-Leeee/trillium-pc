import React from 'react';
import styles from './ServiceGrid.module.css';

const servicesData = [
  {
    title: "Technical Support",
    details: [
      "Onsite Technical Support",
      "Remote Support",
      "Service Desk (Helpdesk)",
      "Lenovo Services"
    ]
  },
  {
    title: "Managed Services",
    details: [
      "Managed IT Services",
      "Network Management and NOC Services",
      "Backup & DR Planning"
    ]
  },
  {
    title: "Consulting Services",
    details: [
      "Cross-functional Perspective",
      "Onsite Assessments & Technology Roadmapping",
      "Security Risk Assessments and Remediation"
    ]
  },
  {
    title: "Professional Services",
    details: [
      "Project-based Consulting",
      "Process Automation and Policy Creation",
      "Change Management"
    ]
  },
  {
    title: "Networking Solutions",
    details: [
      "Networking Solutions",
      "Cabling Installation",
      "Satellite Office Support"
    ]
  },
  {
    title: "IT Solutions",
    details: [
      "On-premise and Cloud Services",
      "Mobile Device Management (MDM)",
      "Offsite and Onsite Backup Solutions"
    ]
  },
  {
    title: "Additional Service 1",
    details: [
      "Additional Detail 1",
      "Additional Detail 2",
      "Additional Detail 3"
    ]
  },
  {
    title: "Additional Service 2",
    details: [
      "Additional Detail A",
      "Additional Detail B",
      "Additional Detail C"
    ]
  }
];

const ServicesGrid = () => {
  return (
    <div className={styles.container}>
      {servicesData.map((service, index) => (
        <div key={index} className={styles.box}>
          <h2 className={styles.title}>{service.title}</h2>
          <ul className={styles.list}>
            {service.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
