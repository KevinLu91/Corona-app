import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker} from './components';
import { getData } from './api';
import styles from './App.module.css';
import images from './images/image.png';

function App() {
  const [data, setData] = useState('');
  const [country, setCountry] = useState(null);

  useEffect(() =>{
    const fetchAPI = async () =>{
      setData(await getData(country));
    }

    fetchAPI();
  }, [country])

  const handleOnChange = (country) =>{
    setCountry(country)
  }

  return (
    <div className={styles.container}>
      <img className={styles.img} src={images} alt='COVID-19'/>
      <Cards data={data}/>
      <CountryPicker handleOnChange={handleOnChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
