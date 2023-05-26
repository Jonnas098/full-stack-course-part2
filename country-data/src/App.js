import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Filter from "./components/Filter";
import Display from "./components/Display";

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  const searchHook = () => {
    axios.get("https://restcountries.com/v3.1/all").then(res => {
      console.log(res.data)
      setCountries(res.data)
    })
  }

  useEffect(searchHook, [])

  const countriesToShow = countries.filter((element)=> element.name.common.toLowerCase().includes(search.toLowerCase()))
  console.log(countriesToShow)

  const handleCountryChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter value={search} onChange={handleCountryChange}/>
      <Display search={search} countriesToShow={countriesToShow}/>
    </div>
  );
}

export default App;
