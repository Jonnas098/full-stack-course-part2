import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    axios.get("http://localhost:3001/notes").then(res => {
      console.log("promise fulfilled")
      setNotes(res.data)
    })
  }

  useEffect(hook, [])
  console.log("Render", notes.length, "notes")

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    console.log("Button clicked", event.target)
    const noteObj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObj))
    setNewNote("")
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return(
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=>setShowAll(!showAll)}>
          Show {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note}/>)}
      </ul>
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