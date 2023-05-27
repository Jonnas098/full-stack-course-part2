import React from "react";
import Country from "./Country";

const Display = ({search, countriesToShow}) => {

  const countryDetail = countriesToShow.map((country, index) =>
    <Country key={index}
     name={country.name.common}
     capital={country.capital}
     population={country.population}
     lang={country.languages}
     flag={country.flags.png}
    />)

  const singleCountry = countriesToShow.map((country, index) =>
    <h3 key={index}>{country.name.common}</h3>)

  return(
    <div>
      {search.length === 0
        ? <p>Write a country name to see the details</p>
        : countriesToShow.length > 10
        ? <p>To many matches, specify another filter</p>
        : countriesToShow.length === 1
        ? countryDetail
        : singleCountry
      }
    </div>
  )
}

export default Display

