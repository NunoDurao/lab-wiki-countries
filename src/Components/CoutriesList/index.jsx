import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
const apiURL = "https://ih-countries-api.herokuapp.com/countries";

export default function CountriesList(props) {
    const {countries} = props;
    const [fecthing, setFetching] = useState(false);

    useEffect(()=>{
        axios.get(apiURL).then(()=>{
            setFetching(true);
        })
    })

  return (
    <div>
        <h3>Countries List</h3>
        {!fecthing && <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' alt=""/> }
        {countries.map((country)=>{
            return(
                <div key={country._id}>
                    <Link to={`/countries/${country.alpha3Code}`}>
                        {country.name.common}
                    </Link>
                </div>
            )
        })}
    </div>
  )
}