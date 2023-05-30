import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import NewContact from "./components/NewContact";
import Contacts from "./components/Contacts";
import phonebookServices from "./services/services"


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")

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

  //Services
  useEffect(()=> {
    phonebookServices
      .getAll()
      .then(allContacts => setPersons(allContacts))
  }, [])

  console.log("Phonebook has", persons.length, "persons")

  const addContact = () => {
    const contactObj = {
      name: newName,
      number: newNumber
    }
    phonebookServices
      .create(contactObj)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
      })
  }

  const deleteContact = id => {
    const contact = persons.find(p => p.id === id)
    //console.log(`Se eliminó el contacto ${contact.name}`)
    phonebookServices
      .deleteContact(contact.id)
      .then(returnedContact => {
        console.log(`Se eliminó el contacto "${contact.name}"`, returnedContact)
        window.confirm(`Se eliminó el contacto "${contact.name}"`)
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  const editNumber = () => {
    const contact = persons.find(p => p.name === newName)
    const contactObj = {
      name: contact.name,
      number: newNumber
    }
    console.log(contact.id)
    phonebookServices
      .editNumber(contact.id ,contactObj)
      .then(returnedContact => {
        setPersons(persons.map(person => person.id !== contact.id ? person : returnedContact))
      })
  }

  const submitFunc = (event) => {
    event.preventDefault()
    const emptyName = newName === ""
    const emptyNumber = newNumber === ""
    const nameExist = persons.some(data => data.name === newName)
    const sameNumber = persons.some(data => data.number !== newNumber)

    nameExist && sameNumber && !emptyNumber && window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) ? editNumber()
    : nameExist ? alert(`${newName} is already added to phonebook`)
    : emptyName ? alert("The name cannot be empty")
    : addContact()

    setNewName("")
    setNewNumber("")
  }

  return (
    <>
      <h2>Phone Book</h2>
      <Filter search={search} handleChange={handleSearchChange}/>
      <h2>Add a new</h2>
      <NewContact
        onSubmit={submitFunc}
        name={newName}
        handleNameChange={handleNameChange}
        number={newNumber}
        handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      {/*<div>debug: {newName} <br/> {newNumber}</div>*/}
      <ul>{contactsToShow.map(contact =>
        <Contacts
          key={contact.id}
          person={contact.name}
          number={contact.number}
          handleDelete={()=>deleteContact(contact.id)}
        />)}
      </ul>
    </>
  );
}

export default App;
