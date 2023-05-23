import React from "react";
import Content from "./Content";

const Course = ({ courses }) => {
  const suma = i => courses[i - 1].parts.reduce((a, b) => a + b.excercises, 0)

  return(
    <>
      {courses.map(course => <Content key={course.id} course={course.name} parts={course.parts} total={suma(course.id)}/> )}
    </>
  )
}

export default Course