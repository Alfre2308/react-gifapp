import React, { useState, useEffect } from "react";
import { GifGridItems } from "./GifGridItems";
import { getGif } from "../helpers/getGifs";
import { useFetchGif } from "../hook/useFetchGif";

export const GifGrid = ({ categoria }) => {
 const {data, loading}= useFetchGif(categoria);
 console.log(loading);
  // const [images, setimages] = useState([]);
  // useEffect(() => {
  //   getGif(categoria).then((img) => setimages(img));
  // }, [categoria]);

  return (
    <>

      <h3>{categoria} </h3>
      {loading&& <p>Cargando...</p>}
      <div className="card-grid">
        {data.map((img) => {
          return <GifGridItems key={img.id} img={img} />;
        })}
      </div>
    </>
  );
};
