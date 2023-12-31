import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import Header from './Header';
import '../components/styles/Flightlist.css';
import { makeStyles } from '@mui/styles';
import Footer from './Footer';
import air1 from '../images/Air1.avif';
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  cardImg: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

const PromotionalCard = ({ imgSrc, title, text }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3} className={classes.card}>
        <img className={classes.cardImg} src={imgSrc} alt={title} />
        <CardContent>
          <Typography variant="h6" component="div" align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {text}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginBottom: '10px' }}
          onClick={() => window.location.href = "/flightlist/seats"}
        >
          Book a seat
        </Button>
      </Card>
    </Grid>
  );
};

const FlightList = ({ flightData }) => {
  return (
    <Container className='mt-4 pt-3 px-0' style={{ backgroundColor: '#F5F5F5' }}>
      <Grid container spacing={3}>
        {flightData.map((flight, index) => (
          <PromotionalCard
            key={index}
            imgSrc={flight.image}
            title={flight.airline}
            text="It's free! And you can start earning from your very first flight with us or any of our airline partners."
          />
        ))}
      </Grid>
    </Container>
  );
};

const Home = () => {
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    // Make an API request to your Spring Boot backend to get flight data
    axios.get('http://localhost:8080/allFlight')
      .then((response) => {
        // Update the flightData state with the response data
        console.log(response);
        setFlightData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching flight data:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      {/* Render the FlightList component with the flight data */}
      <FlightList flightData={flightData} />
      <FlightList flightData={flightData} />
      <Grid sx={{ marginTop: '100px' }}>
        <Grid>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
