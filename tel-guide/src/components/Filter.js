import React from "react";

const Filter = ({ search, handleChange}) => {
  return(
    <div>Filter shown with <input value={search} onChange={handleChange}/></div>
  )
}

export default Filter