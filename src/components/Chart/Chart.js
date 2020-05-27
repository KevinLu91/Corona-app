import React, { useState, useEffect } from 'react';
import { Line, Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

import { getDailyData } from '../../api';

const Chart = ({ data, country}) =>{
  const [dailyData, setDailyDate] = useState([]);

  useEffect(() =>{
    const fetchDailyAPI = async () =>{
      setDailyDate(await getDailyData())
    }

    fetchDailyAPI();
  }, [])

  const lineChart = (
    dailyData.length 
      ? (
        <Line 
          data={{
            labels: dailyData.map(({reportDate}) => reportDate),
            datasets: [{
              data: dailyData.map(({confirmed}) => confirmed),
              label: 'Smittade',
              borderColor: 'rgb(255, 165, 0)',
              backgroundColor: 'rgb(255, 165, 0, 0.2)',
              fill: true,
            }, {
              data: dailyData.map(({deaths}) => deaths),
              label: 'Dödsfall',
              borderColor: 'red',
              backgroundColor: 'rgb(255, 0, 0, 0.5)',
              fill: true,
            }],
          }}
        />
      ) : null
  )

  const barChart = (
    data.confirmed
      ? (
        <Bar 
          data={{
            labels: ['Smittade', 'Frisk förklarade', 'Dödsfall'],
            datasets: [{
              label: 'Människor',
              backgroundColor: [
                'rgb(255, 165, 0, 0.5)',
                'rgb(0, 255, 0, 0.5)',
                'rgb(255, 0, 0, 0.5)',
              ],
              data: [data.confirmed.value, data.recovered.value, data.deaths.value]
            }]
          }}
          options={{
            legend: { display: false},
            title: { display: true, text:`Current state in ${country}`},
          }}
        />
      ) : null
  )

  
  return(
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;
