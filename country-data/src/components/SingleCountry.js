import React, {useState} from "react";
import Country from "./Country";

const SingleCountry = ({ country, population, alt, flag, capital, lang }) => {
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }
  let languages = Object.values(lang);

  console.log("Country name:",country, population)

  return(
    <div className={"test-content"}>
      <li>
        <h3>{country}</h3>
        <button onClick={()=>handleClick()}>Show details</button>
      </li>
      {!show ?
        <div className={"test-dos"}>
          <Country
            name={country}
            capital={capital}
            lang={languages}
            population={population}
            flag={flag}
            alt={alt}/>
        </div>
        : <></>}
    </div>
  )
}

export default SingleCountry
