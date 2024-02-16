import React from "react";

export const GifGridItems = ({ img }) => {
  // console.log(img.id);
  return (
    <div className="card animate__animated animate__bounce">
      <img src={img.url} alt={img.title} />
      <p>{img.title}</p>
    </div>
  );
};
