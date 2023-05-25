import React from "react";

const NewContact = ({ onSubmit, handleNameChange, handleNumberChange, name, number }) => {
  return(
    <>
      <form onSubmit={onSubmit}>
        <div>
          Name: <input
          placeholder={"Enter new contact"}
          value={name}
          onChange={handleNameChange}
        />
        </div>
        <div>
          Number: <input
          placeholder={"Enter the number"}
          value={number}
          onChange={handleNumberChange}
        />
        </div>
        <div>
          <button type={"submit"}>Add</button>
        </div>
      </form>
    </>
  )
}

export default NewContact