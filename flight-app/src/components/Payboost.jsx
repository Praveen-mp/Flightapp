import React from 'react';
import { Container, Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import pay from '../images/payimg.png';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '5 1rem',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  textContainer: {
    textAlign: 'left',
    padding: '1rem',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  content: {
    fontSize: '1rem',
  },
  button: {
    backgroundColor: 'red',
    border: 'none',
    fontWeight: 'bold',
    color: 'white',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: 'red', // Set the hover color to red
    }
  },
}));

export default function Payboost() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} className={classes.imageContainer}>
            <Paper elevation={3}>
              <img src={pay} alt="payments" className={classes.image} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} className={classes.textContainer}>
            <Typography variant="h3" className={classes.title}>
              Boost your balance every day
            </Typography>
            <br />
            <Typography variant="body1" className={classes.content}>
              Every neoair Point you earn through Flying Club and neoair combines into a single balance
            </Typography>
            <br />
            <Typography variant="h3" className={classes.title}>
              More ways to spend your points
            </Typography>
            <Typography variant="body1" className={classes.content}>
              Starting at just 200 neoair Points, choose from little treats, neo exclusives, and VIP concerts.
            </Typography>
            <Button href="#" variant="contained" className={classes.button}>
              Show me more about neoair
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
