import React, {useState} from "react";

const SingleCountry = ({ country, population, alt, flag, capital, lang }) => {
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }
  let languages = Object.values(lang);

  return(
    <div className={"test-content"}>
      <li>
        <h3>{country}</h3>
        <button onClick={()=>handleClick()}>Show details</button>
      </li>
      {show ?
        <div className={"test"}>
          <h1>{country}</h1>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <h2>Languages</h2>
          <ul>
            {languages.map((element, index) => <li key={index}>{element}</li>)}
          </ul>
          <img alt={alt} src={flag}/>
        </div>
        : <div className={"test-dos"}>
          <h1>{country}</h1>
          <p>Capital: {capital}</p>
          <p>Population: {population}</p>
          <h2>Languages</h2>
          <ul>
            {languages.map((element, index) => <li key={index}>{element}</li>)}
          </ul>
          <img alt={alt} src={flag}/>
        </div>
      }
    </div>
  )
}

export default SingleCountry
