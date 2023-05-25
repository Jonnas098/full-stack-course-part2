import React from "react";

const Filter = ({ search, handleChange}) => {
  return(
    <div>Filter shown with <input
      value={search}
      onChange={handleChange}
      placeholder={"Search a contact"}
    />
    </div>
  )
}

export default Filter