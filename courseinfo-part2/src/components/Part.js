import React from "react";

const Part = ({ part, excercises }) => {
  console.log(part, excercises)
  return(
    <>
      <p>{part} {excercises}</p>
    </>
  )
};

export default Part