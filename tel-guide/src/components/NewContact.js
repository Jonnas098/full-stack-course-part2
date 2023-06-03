import React from "react";

const NewContact = ({ onSubmit, handleNameChange, handleNumberChange, name, number }) => {
  return(
    <>
      <h2>add a new</h2>
      <hr/>
      <form onSubmit={onSubmit}>
        <p>Name:</p>
        <input
          placeholder={"Enter new contact"}
          value={name}
          onChange={handleNameChange}
        />
        <p>Number: </p>
        <input
          placeholder={"Enter the number"}
          value={number}
          onChange={handleNumberChange}
        />
        <div>
          <button className="submit" type={"submit"}>Add</button>
        </div>
      </form>
    </>
  )
}

export default NewContact