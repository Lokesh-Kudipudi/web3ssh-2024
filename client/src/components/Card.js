import React from "react";
import styles from "./Card.module.css";

const Card = ({ imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Card" />
    </div>
  );
};

export default Card;
