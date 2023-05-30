import React from "react";

const Contacts = ({ person, number, handleDelete }) => {

  return(
    <>
      <li>
        {person} {number}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  )
}

export default Contacts