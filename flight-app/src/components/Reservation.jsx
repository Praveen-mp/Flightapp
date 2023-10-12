// Reservation.js
import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, CardContent } from '@mui/material';
import './styles/Reservation.css'; // Import your custom CSS file
import Header from './Header';
import Carousels from './Carousels';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
// import { useHistory } from 'react-router-dom';

function Reservation() {
  // const history = useHistory();

  const [passengerDetails, setPassengerDetails] = useState({
    name: '',
    email: '',
    password: '',
    departureTime: '',
    arrivalTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassengerDetails({
      ...passengerDetails,
      [name]: value,
    });
    // console.log(name+" "+password);
  };

  const validateUser = (email, password) => {
    // Retrieve user data from local storage or any other source
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    console.log(storedEmail+" stored "+storedPassword);
    return email === storedEmail && password === storedPassword;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password,name } = passengerDetails;
    const storeName = localStorage.setItem('userName', passengerDetails.name)
    
    // console.log(email+" "+password);
    if (validateUser(email, password)) {
      // Redirect to UserProfile page
        window.location.href="/flightdet"
    } else {
      // Show an error message to the user
      console.log(validateUser(email, password));
      console.log('Invalid email or password');
      // window.location.href="/signup"
      
    }
  };

  const [date, setDate] = useState(dayjs()); // Initialize with the current date

  return (
    <div>
      <Header />
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25px' },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      
      <Container>
        <Paper sx={{ width: '60rem', margin: 'auto',marginTop:'10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease', // Add transition for smooth effect
          '&:hover': {
           boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)', // New shadow on hover
      },
          }}>
          <CardContent>
            <Typography variant="h5" className="res-tit">
              Look up a booking
            </Typography>
            <Typography variant="body2" className="res-tex">
              Enter your information to look up a trip. You can search by booking reference or eTicket number. All fields are required.
            </Typography>
            <div>
              <TextField
                fullWidth
                label="Email"
                variant="standard"
                name="email"
                value={passengerDetails.email}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Name"
                variant="standard"
                name="name"
                value={passengerDetails.name}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Password"
                variant="standard"
                type="password"
                name="password"
                value={passengerDetails.password}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Departure time"
                variant="standard"
                type="time"
                name="departureTime"
                value={passengerDetails.departureTime}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                label="Arrival time"
                variant="standard"
                type="time"
                name="arrivalTime"
                value={passengerDetails.arrivalTime}
                onChange={handleInputChange}
                sx={{ marginBottom: '20px' }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker fullWidth label="Select Date" value={date} onChange={(newDate) => setDate(newDate)} />
              </LocalizationProvider>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
              <Button variant="contained" color="error" onClick={handleSubmit}>
                Search
              </Button>
            </div>
          </CardContent>
        </Paper>
      </Container>
      <Carousels />
    </div>
  );
}

export default Reservation;
