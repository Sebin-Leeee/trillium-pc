// components/Reviews.js
import React from "react";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const reviews = [
    {
      text: "Trillium PC significantly improved our network's efficiency and security. Grant and their team were professional, responsive, and delivered exceptional service. The team’s expertise and dedication were evident throughout the process. We are extremely satisfied and highly recommend Trillium PC!",
      image: "/client1.png",
      name: "John Doe",
      role: "CEO, Company A",
    },
    {
      text: "Trillium PC significantly improved our network's efficiency and security. Grant and their team were professional, responsive, and delivered exceptional service. The team’s expertise and dedication were evident throughout the process. We are extremely satisfied and highly recommend Trillium PC!",
      image: "/client2.png",
      name: "Jane Smith",
      role: "CTO, Company B",
    },
    {
      text: "Trillium PC significantly improved our network's efficiency and security. Grant and their team were professional, responsive, and delivered exceptional service. The team’s expertise and dedication were evident throughout the process. We are extremely satisfied and highly recommend Trillium PC!",
      image: "/client3.png",
      name: "Robert Brown",
      role: "Manager, Company C",
    },
  ];

  return (
    <div className={styles.reviews}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={styles.reviewContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewBox}>
            <p className={styles.reviewText}>{review.text}</p>
            <div className={styles.clientInfo}>
              <img
                src={review.image}
                alt={review.name}
                className={styles.clientImage}
              />
              <div className={styles.clientDetails}>
                <span className={styles.clientName}>{review.name}</span>
                <span className={styles.clientRole}>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
