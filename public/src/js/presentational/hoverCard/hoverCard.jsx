import React from "react";
import styles from "./hoverCard.css";

const HoverCard = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={styles.wrapper}>
      {arr.map((index, value) => {
        return (
          <div key={index} className={styles.card}>
            <img
              className={styles.cardImg}
              src="https://www.ozanoo.com/uploads/ozanoo-jewelery/products/se10013-1-749357_l.jpg"
            />
            <div className={styles.content}>
              <h1 style={{ color: "white" }}>I m overlapping text</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HoverCard;
