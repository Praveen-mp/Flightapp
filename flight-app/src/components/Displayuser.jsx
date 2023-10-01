import React, { useEffect, useState } from 'react';
import { Typography, Container, Paper, Button } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Displayuser = () => {
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    // Retrieve user flight details from local storage
    const storedFlightData = localStorage.getItem('userFlightData');

    if (storedFlightData) {
      setFlightData(JSON.parse(storedFlightData));
    }
  }, []);

  const handleBooking = () => {
    // Add logic to perform booking action
    // You can redirect the user to a booking page or show a booking confirmation
    console.log('Booking action performed');
    window.location.href = '/confirmed';
  };

  const handleCancelBooking = () => {
    // Remove flight data from local storage
    localStorage.removeItem('userFlightData');
    
    // Redirect to the Reservation page
    window.location.href = '/mybooking';
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" style={{ marginTop: '100px',marginBottom:'170px' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" component="div" gutterBottom>
            User Flight Details
          </Typography>
          {flightData ? (
            <div>
              <Typography variant="body1" gutterBottom>
                <strong>Origin:</strong> {flightData.origin}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Destination:</strong> {flightData.destination}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Departure Date:</strong> {flightData.departureDate}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Return Date:</strong> {flightData.returnDate}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleBooking}
                style={{ marginRight: '10px' }}
              >
                Book Now
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleCancelBooking}
              >
                Cancel Booking
              </Button>
            </div>
          ) : (
            <Typography variant="body1">No flight details found.</Typography>
          )}
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default Displayuser;
