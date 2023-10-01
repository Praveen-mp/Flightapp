import React, { useState } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { AirlineSeatIndividualSuite, AirlineSeatLegroomExtra } from '@mui/icons-material';
import '../components/styles/SeatBook.css'
import Header from './Header';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
const AirlineSeatsView = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const renderSeat = (seatNumber) => {
    const isSelected = selectedSeats.includes(seatNumber);

    return (
      <Button
        variant={isSelected ? 'contained' : 'outlined'}
        startIcon={isSelected ? <AirlineSeatIndividualSuite /> : <AirlineSeatLegroomExtra />}
        onClick={() => handleSeatClick(seatNumber)}
      >
        {seatNumber}
      </Button>
    );
  };

  return (
    <div className='con-back'>
      <Header/>
      <Container className='con-seat py-3'>
      <h2>Airline Seats View</h2>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center">
          {/* <Paper elevation={3} style={{marginTop: '20px'}}> */}
          <Grid container spacing={3}>
            {Array.from({ length: 4 }, (_, row) => (
              <Grid container item justifyContent="center" key={row} style={{marginLeft:'2px'}}>
                {Array.from({ length: 5 }, (_, col) => (
                  <Grid item key={col}>
                    <Paper elevation={3} sx={{ p: 2,m:1 }} style={{backgroundColor:'#50999',color:'red'}}>
                      {renderSeat(`${String.fromCharCode(65 + row)}${col + 1}`)}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
          {/* </Paper> */}
      </Grid>
      
      <Grid>
        <Grid>
          <Button variant="contained" color="error" onClick={()=>window.location.href="/seats/reservefare"}>Confirm booking</Button>
        </Grid>
      </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

export default AirlineSeatsView;