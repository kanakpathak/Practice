import React from "react";
import styles from "./hoverCard.css";

const HoverCard = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={wrapper}>
      {arr.map((index, value) => {
        return (
          <img
            className={styles.card}
            key={index}
            src="https://www.ozanoo.com/uploads/ozanoo-jewelery/products/se10013-1-749357_l.jpg"
            height="25%"
            width="20%"
          />
        );
      })}
    </div>
  );
};

export default HoverCard;
