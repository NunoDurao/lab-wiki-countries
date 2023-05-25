import { useEffect, useState } from "react";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

export default function ApiRequest(){
    const [fecthing, setFetching] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        axios.get(apiURL).then((response)=>{
            setCountries(response.data);
            setFetching(true);
        })
    })
    return(
        <div>
            <h3>List of countries</h3>
            {!fecthing && <p>Loading...</p>}
            {countries.map((country)=>{
                return(
                    <div key={country._id}>
                        <h3>{country.name.common}</h3>
                        <p>{country.name.official}</p>

                        <p>Capital: {country.capital}</p>
                    </div>
                )
            })}
        </div>
    )
}
