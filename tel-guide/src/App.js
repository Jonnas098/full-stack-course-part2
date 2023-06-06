import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import NewContact from "./components/NewContact";
import Contacts from "./components/Contacts";
import Notification from "./components/Notification";
import phonebookServices from "./services/services"


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")
  const [message, setMessage] = useState(null)
  const confirm =  window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

  const contactsToShow = persons.filter((element)=> element.name.toLowerCase().includes(search.toLowerCase()))

  const alreadyAdded = () => {
    setMessage(`${newName} is already added to phonebook`)
    setTimeout(()=>{
      setMessage(null)
    }, 5000)
  }

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
        setMessage(`Added ${returnedContact.name}`)
        setTimeout(()=>{
          setMessage(null)
        }, 5000)
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
      .catch(error => {
        setMessage(`${contact.name} has already been deleted from server`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
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

    nameExist && sameNumber && !emptyNumber && confirm ? editNumber()
    : nameExist ? alreadyAdded()
    : emptyName ? alert("The name cannot be empty")
    : addContact()

    setNewName("")
    setNewNumber("")
  }

  return (
    <div className="principal">
      <div className="second">
      <h4>phone book</h4>
      <Notification message={message}/>
      <NewContact
        onSubmit={submitFunc}
        name={newName}
        handleNameChange={handleNameChange}
        number={newNumber}
        handleNumberChange={handleNumberChange}/>
      <h2>numbers</h2>
      <hr/>
      <Filter search={search} handleChange={handleSearchChange}/>
      {/*<div>debug: {newName} <br/> {newNumber}</div>*/}
      <ul>{contactsToShow.map(contact =>
        <Contacts
          key={contact.id}
          person={contact.name}
          number={contact.number}
          handleDelete={()=>deleteContact(contact.id)}
        />)}
      </ul>
      </div>
    </div>
  );
}

export default App;
