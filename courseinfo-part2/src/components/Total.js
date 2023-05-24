import React from "react";
const Total = ({total}) => {
  console.log("Componente Total: ", total)

  return (
    <>
      <b>Total courses {total}</b>
    </>
  );
};

export default Total