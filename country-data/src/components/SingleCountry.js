import React, {useState} from "react";
import Country from "./Country";

const SingleCountry = ({ country, population, alt, flag, capital, lang }) => {
  const [show, setShow] = useState(true)

  let languages = Object.values(lang);

  const handleClick = () => setShow(!show)

  return(
    <>
      <li>
        <h4>{country}</h4>
        <button onClick={()=>handleClick()}>{show ? "Show Details" : "Hide Details"}</button>
      </li>
      {!show ?
        <Country
          name={country}
          capital={capital}
          lang={languages}
          population={population}
          flag={flag}
          alt={alt}/>
        : null}
    </>
  )
}

export default SingleCountry
