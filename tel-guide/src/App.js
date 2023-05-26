import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import NewContact from "./components/NewContact";
import Contacts from "./components/Contacts";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")

  const getHook = () => {
    axios.get("http://localhost:3001/persons").then(res => {
      console.log("Promise fulfilled")
      setPersons(res.data)
    })
  }
  console.log("Phonebook has", persons.length, "persons")
  useEffect(getHook, [])

  const addContact = (event) => {
    event.preventDefault()
    const contactObj = {
      name: newName,
      number: newNumber
    }
    const nameExist = persons.some(data => data.name === newName)
    nameExist ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat(contactObj))
    setNewName("")
    setNewNumber("")
  }

  const contactsToShow = persons.filter((element)=> element.name.toLowerCase().includes(search.toLowerCase()))
  console.log(contactsToShow)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <>
      <h2>Phone Book</h2>
      <Filter search={search} handleChange={handleSearchChange}/>
      <h2>Add a new</h2>
      <NewContact
        onSubmit={addContact}
        name={newName}
        handleNameChange={handleNameChange}
        number={newNumber}
        handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      {/*<div>debug: {newName} <br/> {newNumber}</div>*/}
      <Contacts arr={contactsToShow}/>
    </>
  );
}

export default App;
