import React from "react";

const Country = ({name, capital, population, flag, lang, alt}) => {

  let languages = Object.values(lang);
  console.log(languages)

  return(
    <div>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map((element, index) => <li key={index}>{element}</li>)}
      </ul>
      <img alt={alt} src={flag}/>
    </div>
  )
}

export default Country