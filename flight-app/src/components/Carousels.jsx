import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ban1 from '../images/sleep.jpg';
import ban2 from '../images/banner1.jpg';
import ban3 from '../images/banner2.jpg';

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginTop: theme.spacing(2),
  },
  carouselImage: {
    width: '100%',
    height: 'auto',
  },
  carouselCaption: {
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: theme.spacing(2),
    textAlign: 'left', // Align text to the left
    position: 'absolute',
    top: '50%', // Center vertically from the top
    left: '10%', // Move slightly to the left
    transform: 'translateY(-50%)', // Center vertically
  },
  captionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  captionText: {
    fontSize: '20px',
  },
  exploreButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'red', // Set the hover color to red
    }
  },
}));

export default function MaterialUICarousel() {
  const classes = useStyles();

  const items = [
    {
      img: ban1,
      title: 'Book Your Flight',
      description: 'Find the best deals and book your next flight with ease.',
    },
    {
      img: ban2,
      title: 'Travel Insurance',
      description: 'Protect your trip with our comprehensive travel insurance plans.',
    },
    {
      img: ban3,
      title: 'Take a trip',
      description: "Explore Antigua's 365 beaches from 20,000 points^",
    },
  ];

  return (
    <div>
      <Grid container className={classes.carousel}>
        <Carousel showThumbs={false}>
          {items.map((item, index) => (
            <div key={index}>
              <img
                className={classes.carouselImage}
                src={item.img}
                alt={`Slide ${index + 1}`}
              />
              <div className={classes.carouselCaption}>
                <Typography variant="h3" className={classes.captionTitle}>
                  {item.title}
                </Typography>
                <Typography variant="body1" className={classes.captionText}>
                  {item.description}
                </Typography>
                {index === 0 && (
                  <Button className={classes.exploreButton} onClick={()=>window.location.href="/search/flightlist"}>
                    Explore our cabins and seats
                  </Button>
                )}
                {index === 1 && (
                  <Button variant="contained" >
                    Explore more <i className="fa fa-rightarrow-r fa-lg"></i>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </Grid>
    </div>
  );
}
