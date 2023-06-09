import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';

// axios.get("http://localhost:3001/notes").then(res => {
//   const notes = res.data
//   console.log(notes)
// })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App notes={notes}/>);


//only for test
// axios.get("http://localhost:3001/notes").then(res => {
//   const notes = res.data
//   ReactDOM.render(
//     <App notes={notes}/>,
//     document.getElementById('root')
//   )
// })

