import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('submit');
    if (inputValue.trim().length > 2) {
      setCategorias((cat) => [inputValue, ...cat]);
    }
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.protoType = {
  setCategorias: PropTypes.func.isRequered,
};
