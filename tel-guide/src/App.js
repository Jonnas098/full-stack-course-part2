import React, { useState } from "react";
import Filter from "./components/Filter";
import NewContact from "./components/NewContact";
import Contacts from "./components/Contacts";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "John Navarro", number: '8924-6888' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")

  const addContact = (event) => {
    event.preventDefault()
    const contactObj = {
      name: newName,
      number: newNumber
    }
    const nameExist = persons.some(data => data.name === newName)
    if (nameExist) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(contactObj))
    }
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
