import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["One Push"]);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ol>
        {categorias.map((categorias) => {
          return <GifGrid key={categorias} categoria={categorias} />;
        })}
      </ol>
    </>
  );
};
