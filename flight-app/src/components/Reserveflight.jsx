import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import Header from './Header';
import adc2 from '../images/Air2.jpg';
import adc1 from '../images/Air1.avif';
import adc3 from '../images/Air3.avif';
import '../components/styles/Flightlist.css';
import { makeStyles } from '@mui/styles';
import Carousels from './Carousels';
import Footer from './Footer';

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
          sx={{marginBottom:'10px'}}
          onClick={() => window.location.href = "/flightlist/seats"}
        >
          Book a seat
        </Button>
      </Card>
    </Grid>
  );
};

// const FlightList = () => {
//   // Flight data remains the same
// };

const Reserveflight = () => (
  <div>
    <Header />
    <Container className='mt-4 pt-3 px-0' style={{ backgroundColor: '#F5F5F5' }}>
      <Grid container spacing={3}>
        <PromotionalCard
          imgSrc={adc1}
          title="Express Airlines"
          text="It's free! And you can start earning from your very first flight with us or any of our airline partners."
        />
        <PromotionalCard
          imgSrc={adc2}
          title="Air India"
          text="It's free! And you can start earning from your very first flight with us or any of our airline partners."
        />
        <PromotionalCard
          imgSrc={adc3}
          title="Singapore Airlines"
          text="It's free! And you can start earning from your very first flight with us or any of our airline partners."
        />
      </Grid>
    </Container>
    {/* Include your FlightList component here */}
    <Grid sx={{marginTop:'100px'}}>
      <Grid>
        <Footer/>
      </Grid>
    </Grid>
    
  </div>
);

export default Reserveflight;
