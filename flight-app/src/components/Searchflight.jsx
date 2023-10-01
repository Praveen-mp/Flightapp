import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import Headbar from './Header';
import Footer from './Footer';

function SearchFlight() {
  const [flightData, setFlightData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would integrate flight data API here and handle the search logic
    console.log('Searching for flights...');
    console.log('Flight Data:', flightData);

    // Store the flight data in local storage
    localStorage.setItem('userFlightData', JSON.stringify(flightData));

    // Redirect to the flight list page
    window.location.href = '/search/flightlist';
  };

  return (
    <div>
      <Headbar />
      <Container>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '70vh' }}>
          <Grid item xs={12} sm={8} md={6}>
            <div style={{ backgroundColor:'#F9F6EE', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h4" align="center" gutterBottom>
                Flight Reservation
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Origin"
                  fullWidth
                  variant="outlined"
                  value={flightData.origin}
                  onChange={(e) => setFlightData({ ...flightData, origin: e.target.value })}
                  required
                  margin="normal"
                />
                <TextField
                  label="Destination"
                  fullWidth
                  variant="outlined"
                  value={flightData.destination}
                  onChange={(e) => setFlightData({ ...flightData, destination: e.target.value })}
                  required
                  margin="normal"
                />
                <TextField
                  label="Departure Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  placeholder="dd-mm-yyyy" // Add the placeholder
                  value={flightData.departureDate}
                  onChange={(e) => setFlightData({ ...flightData, departureDate: e.target.value })}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }} // Ensure the label doesn't overlap with the placeholder
                />
                <TextField
                  label="Return Date"
                  type="date"
                  fullWidth
                  variant="outlined"
                  value={flightData.returnDate}
                  onChange={(e) => setFlightData({ ...flightData, returnDate: e.target.value })}
                  required
                  margin="normal"
                  InputLabelProps={{ shrink: true }} // Ensure the label doesn't overlap with the placeholder
                />
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  style={{ marginTop: '16px' }}
                  fullWidth
                >
                  Search Flights
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default SearchFlight;
