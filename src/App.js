/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import CountriesList from './Components/CoutriesList';
import CountryDetails from './Components/CountryDetails';
import Header from './Components/Header';

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCountries = async () => {
    try {
      let response = await axios.get(apiURL);
      setCountries(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Header />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          {/* React-Router Route rendering the CountryDetails should go here */}
        </div>
      </div>

      <Routes>
        <Route
          path="/countriesList/:countryId"
          element={
            loading ? (
              <p>It's loading</p>
            ) : (
              <CountryDetails countries={countries} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;

