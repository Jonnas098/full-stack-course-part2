import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import "./app.css"
import noteService from "./services/notes"

const Spiner = () => {
  return(
    <div className={"scaling-dots"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  //Services:

  useEffect(()=>{
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    console.log("Button clicked", event.target)
    const noteObj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }
    noteService
      .create(noteObj)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote("")
      })
  }

  const toggleImportanceOf = id => {
    console.log(`Importance of ${id} needs to be toggled`)
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note=> note.id !== id ? note : returnedNote))
    })
  }

  return(
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          Show {showAll ? "Important" : "All"}
        </button>
      </div>
      {notesToShow.length === 0
        ? <Spiner/>
        : <ul>{notesToShow.map(note => <Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)}/>)}</ul>}
      <form onSubmit={addNote}>
        <input
          value={newNote}
          placeholder={"Add a new note..."}
          onChange={handleNoteChange}
        />
        <button type={"submit"}>Save</button>
      </form>
    </div>
  )
}

export default App