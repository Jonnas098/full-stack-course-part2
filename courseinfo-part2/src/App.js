import React from "react";
import './App.css';

import Course from "./components/Course";

const App = () => {
  const courses = [
    //Primera parte
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          id: 1,
          name: "Fundamentals of React",
          excercises: 10
        },
        {
          id: 2,
          name: "Using props to pass data",
          excercises: 7
        },
        {
          id: 3,
          name: "State of a component",
          excercises: 14
        },
        {
          id: 4,
          name: "Redux",
          excercises: 11
        },
      ]
    },
    //Segunda parte
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          id: 1,
          name: "Routing",
          excercises: 3
        },
        {
          id: 2,
          name: "Middlewares",
          excercises: 7
        },
      ],
    },
  ]

  return <Course courses={courses}/>
}

export default App;
