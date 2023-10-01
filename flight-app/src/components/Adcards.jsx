import React from 'react';
import { Container, Grid, Card, CardContent, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import adc1 from '../images/Adc1.avif';
import adc2 from '../images/Adc2.jpeg';
import adc3 from '../images/Adc3.jpeg';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '18px',
    marginBottom: '1rem',
    paddingTop: '0.75rem',
    backgroundColor: '#F5F5F5',
  },
  card: {
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
    textDecoration:'none'
  },
  cardImg: {
    width: '100%',
    objectFit: 'cover',
  },
  button: {
    backgroundColor: 'red',
    border: 'none',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '1rem',
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
}));

export default function Adcards() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={4} className='d-flex justify-content-center'>
            {/* Wrap the Card component with Link */}
            <Link to="/search" className={classes.card}>
              <Card>
                <img className={classes.cardImg} src={adc1} alt="Adc1" />
                <CardContent>
                  <h5>Join flying club</h5>
                  <p>
                    It's free! And you can start earning from your very first
                    flight with us or any of our airline partners.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item md={4} className='d-flex justify-content-center'>
            {/* Wrap the Card component with Link */}
            <Link to="/search" className={classes.card}>
              <Card>
                <img className={classes.cardImg} src={adc2} alt="Adc2" />
                <CardContent>
                  <h5>Earn free tickets</h5>
                  <p>
                    It's free! And you can start earning from your very first
                    flight with us or any of our airline partners.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          <Grid item md={4} className='d-flex justify-content-center'>
            {/* Wrap the Card component with Link */}
            <Link to="/search" className={classes.card}>
              <Card>
                <img className={classes.cardImg} src={adc3} alt="Adc3" />
                <CardContent>
                  <h5>International trip</h5>
                  <p>
                    It's free! And you can start earning from your very first
                    flight with us or any of our airline partners.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Button variant="contained" className={classes.button}>To know more</Button>
        </Grid>
      </Container>
    </div>
  );
}
