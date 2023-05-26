import React from "react";

const Country = ({name, capital, populaton, flag, lang}) => {

  let languages = Object.values(lang);
  console.log(languages)

  return(
    <>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {populaton}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map((element, index) => <li key={index}>{element}</li>)}
      </ul>
      <div>{flag}</div>
    </>
  )
}

export default Country