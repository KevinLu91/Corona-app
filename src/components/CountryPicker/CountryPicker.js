import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { getCountries } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleOnChange }) =>{
  const [countries, setCountries] = useState([])

  useEffect(() =>{
    const fetchCountriesAPI = async () =>{
      setCountries(await getCountries())
    }

    fetchCountriesAPI();

  }, [setCountries])

  return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleOnChange(e.target.value)}>
        <option value=''>Globalt</option>
        {countries ? 
          countries.map( country =>(
            <option key={country} value={country}>
              {country}
            </option>
          )) : null
        }
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker;