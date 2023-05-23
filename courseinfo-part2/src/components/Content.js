import React from "react";
import Part from "./Part";
import Total from "./Total";
import Header from "./Header";


const Content = ({parts, total, course}) => {
  return (
    <>
      <Header course={course}/>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} excercises={part.excercises}/>
      ))}
      <Total total={total}/>
    </>
  );
};

export default Content