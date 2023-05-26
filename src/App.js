/* eslint-disable no-unused-vars */
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

