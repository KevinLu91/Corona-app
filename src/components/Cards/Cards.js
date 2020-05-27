import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate } }) =>{
  if(!confirmed){
    return <p>Loading...</p>
  }

  
  return(
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Smittade</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={2} separator=','/>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Antal aktiva fall av COVID-19.</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Frisk förklarade</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={2} separator=','/>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Antal tillfriskna fall av COVID-19.</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Dödsfall</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2} separator=','/>
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Antal dödsfall av COVID-19.</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;