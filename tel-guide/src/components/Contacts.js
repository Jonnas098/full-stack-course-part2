import React from "react";

const Contacts = ({ arr }) => {

  return(
    <>
      {arr.map((person, index)=> <p key={index}>{person.name} {person.number}</p>)}
    </>
  )
}

export default Contacts