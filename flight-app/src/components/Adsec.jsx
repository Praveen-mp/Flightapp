import React from 'react';
import { Card, CardContent, Button, Grid, Typography } from '@material-ui/core';
import biggy from '../images/biggy.png';
import lock from '../images/clock.png';
import clock from '../images/clock.png';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button:{
        backgroundColor:'#FF0000',
        color:'white',
        '&:hover': {
          backgroundColor: 'red', // Set the hover color to red
        }
    }
}))
function AdCards() {
    const classes = useStyles();
  return (
    <Grid container spacing={3} className="my-4">
      <Grid item md={4} xs={12} className="d-flex justify-content-center">
        <Card>
          <img src={biggy} alt="Ad Image" style={{ width: '100%', height: 'auto' }} />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Special Offer
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Save on your next flight! Book now and enjoy exclusive discounts.
            </Typography>
            <Button variant="contained" className={classes.button} fullWidth>
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4} xs={12} className="d-flex justify-content-center">
        <Card>
          <img src={lock} alt="Ad Image" style={{ width: '100%', height: 'auto' }} />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Travel Insurance
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Protect your trip with our travel insurance plans. Peace of mind for your journey.
            </Typography>
            <Button variant="contained" className={classes.button} fullWidth>
              Get Insurance
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={4} xs={12} className="d-flex justify-content-center">
        <Card>
          <img src={clock} alt="Ad Image" style={{ width: '100%', height: 'auto' }} />
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Rent a Car
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Explore your destination with ease. Rent a car at your arrival airport.
            </Typography>
            <Button variant="contained" className={classes.button} fullWidth>
              Rent Now
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AdCards;
