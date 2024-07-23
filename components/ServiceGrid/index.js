import React from 'react';
import styles from './ServiceGrid.module.css';


const servicesData = [
  {
    title: "Onsite Technical Support",
    description: "Rapid response and expert troubleshooting for computer and server issues, with tailored solutions to maximize hardware performance.",
    icon: '/services/onsite.png',
    link: "/onsitesupport"
  },
  {
    title: "Managed Services",
    description: "Comprehensive maintenance and proactive support to optimize efficiency, focusing on managing servers and network components.",
    icon: "/services/managed.png",
    link: "/managedservices"
  },
  {
    title: "Networking Solutions",
    description: "Design and implementation of networking architectures, optimizing performance and scalability.",
    icon: "/services/network.png",
    link: "/networkingsolutions"
  },
  {
    title: "Remote Support",
    description: "Immediate remote assistance and secure access for computer and server problems, ensuring quick resolution using remote tools.",
    icon: "/services/remote.png",
    link: "/remotesupport"
  },
  {
    title: "Professional Services",
    description: "Expert consultation on migrations, specialized projects for server environments, and optimized datacenter moves.",
    icon: "/services/pro.png",
    link: "/professionalservices"
  },
  {
    title: "Backup & DR Planning",
    description: "Customized backup solutions and disaster recovery planning specific to infrastructure, ensuring data continuity and protection.",
    icon: "/services/planning.png",
    link: "/backup-drplanning"
  },
  {
    title: "Consulting Services",
    description: "Strategic guidance on technology roadmaps, security assessments, and alignment of IT strategy with hardware capabilities.",
    icon: "/services/consulting.png",
    link: "/consultingservices"
  },
  {
    title: "Lenovo Procurement",
    description: "Expert guidance on optimal Lenovo hardware configurations and software acquisition.",
    icon: "/services/laptop.png",
    link: "/lenovo"
  },
  {
    title: "Server Decommissioning",
    description: "Safe retirement, compliance with environmental regulations, and secure data erasure for end-of-life equipment.",
    icon: "/services/setting.png",
    link: "/serverdecommissioning"
  }
];

const ServicesGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {servicesData.map((service, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={service.icon} alt="Service Icon" className={styles.icon} width={40} height={"auto"}/>
          <h2 className={styles.title}>{service.title}</h2>
          <p className={styles.description}>{service.description}</p>
          <a href={service.link} className={styles.button}>Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
