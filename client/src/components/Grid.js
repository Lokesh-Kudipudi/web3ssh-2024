// src/App.js
import React from "react";
import Card from "./Card";
import styles from "./Grid.module.css";

const Grid = ({ images }) => {
  return (
    <div className={styles.Grid}>
      <div className="card-grid">
        {images.map((url, index) => (
          <Card key={index} imageUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
