import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import {fetchData, fetchCountryData} from './components/fetch'


function Home() {
  const [countries, setCountries] = useState([])
  const [state, setState] = useState([])
  let history = useHistory()

  // fetch data on mount
  useEffect(() => {

    fetchData().then((data) => {

      setCountries(data)
      setState(data)
    })
    .catch(e => {
      console.log(e)
    })
  },[])

  // Handle onSubmit event
  const handleSearch = (e) => {

    e.preventDefault()

    let inputField = document.getElementById('input_field').value

    if(inputField){

      let filterCountry = countries.filter(country => country.name.toLowerCase() === inputField.toLowerCase())
      setCountries(filterCountry) // set input state
    }else{
      setCountries(state)
    }
  }

  const fetchCountry = async (e) => {
    try{
      await fetchCountryData(e.target.id)
      .then(() => {
        history.push('/info')
      })
      .catch(e => {
        console.log(e)
      })
    }catch(e){
      console.log(e)
    }
    
  }

  return (
    <div className="container">
      <div style={{display: "none"}}>
        
      </div>

      <form onSubmit={handleSearch} className="form">
        <input 
        type="text"
        className="form-control"
        id="input_field"
        onChange={(e) => {if(!e.target.value) setCountries(state)}}
        placeholder="Enter country name"
        />

        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {countries.length > 0 ? countries.map((country, i) => (
        <div key={i} className="mt-5">
          <h1 className="country-list" onClick={fetchCountry} id={country.url}>{country.name}</h1>
        </div>
    )): (<h2>Oops, Country not found</h2>)}
    </div> 
  );
}

export default Home;
