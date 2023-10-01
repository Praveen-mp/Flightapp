import React from 'react';
import { Container, Grid, Typography, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#F2F2F2',
    color: 'black',
    padding: '1rem 0',
  },
  icon: {
    fontSize: '2rem',
    marginRight: '1rem',
  },
  socialIcon: {
    fontSize: '1.5rem',
    marginRight: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight:'bold'
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '1rem 0',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={3} justify="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Payment Methods</Typography>
            <div>
              <i className={`fa fa-cc-visa ${classes.icon}`}></i>
              <i className={`fa fa-cc-mastercard ${classes.icon}`}></i>
              <i className={`fa fa-cc-paypal ${classes.icon}`}></i>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>
              7th cross street CA<br />
              Coimbatore, India<br />
              Phone: (+91) 900-386-7705
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Follow Us</Typography>
            <div>
              <Link href="#!" className={`text-dark ${classes.socialIcon}`}>
                <i className="fa fa-facebook-f"></i>
              </Link>
              <Link href="#!" className={`text-dark ${classes.socialIcon}`}>
                <i className="fa fa-twitter"></i>
              </Link>
              <Link href="#!" className={`text-dark ${classes.socialIcon}`}>
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </Grid>
        </Grid>
        <div className={classes.linkContainer}>
          <Link href="/home" style={{marginRight:'10px'}} className={classes.link}>Home</Link>
          <Link href="/search" style={{marginRight:'10px'}} className={classes.link}>Book</Link>
          <Link href="/mybooking" style={{marginRight:'10px'}} className={classes.link}>My Booking</Link>
          <Link href="/checkin" style={{marginRight:'10px'}} className={classes.link}>Check In</Link>
          <Link href="/search" style={{marginRight:'10px'}} className={classes.link}>Reservation</Link>
          <Link href="/profile" style={{marginRight:'10px'}} className={classes.link}>Profile</Link>
          <Link href="/about" style={{marginRight:'10px'}} className={classes.link}>About</Link>
          <Link href="/faq" style={{marginRight:'10px'}} className={classes.link}>FAQ</Link>
        </div>

        {/* Terms and conditions */}
        
        <div className={classes.linkContainer}>
        <Link href="/faq" style={{marginRight:'10px'}} className={classes.link}>Terms and conditions</Link>
        </div>

      </Container>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Travelbug. All Rights Reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
