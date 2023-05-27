import React from "react";
import Country from "./Country";
import SingleCountry from "./SingleCountry";
const Display = ({search, countriesToShow}) => {

  const countryDetail = countriesToShow.map((country, index) =>
    <Country key={index}
     name={country.name.common}
     capital={country.capital}
     population={country.population}
     lang={country.languages}
     flag={country.flags.png}
  />)

  const singleCountry = countriesToShow.map((country, index) =>(
    <SingleCountry key={index}
     country={country.name.common}
     population={country.population}
     capital={country.capital}
     lang={country.languages}
     flag={country.flags.png}
    />)
  )

  return(
    <div>
      {search.length === 0 ?
          <p>Write a country name to see the details</p>
        : countriesToShow.length > 10 ?
          <p>To many matches, specify another filter</p>
        : countriesToShow.length === 1 ?
          countryDetail
        : <ul>{singleCountry}</ul>
      }
    </div>
  )
}

export default Display
