import React from "react";
import Card from "./Card";

const Grid = ({ images }) => {
  return (
    <div>
      <div className="card-grid">
        {images.map((url, index) => (
          <Card key={index} imageUrl={url} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
