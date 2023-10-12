import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import {
  Container,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  TextField,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const UserDetails = () => {
  const [isEditing, setIsEditing] = useState(true);
  const storedUser = JSON.parse(localStorage.getItem('userProfile'));
  const userName = localStorage.getItem('name');
  const recentBookings = JSON.parse(localStorage.getItem('recentBookings')) || [];
  const userEmail = localStorage.getItem('userEmail');
  const [userFareData, setUserFareData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
  }); // To store fetched user-specific data

  const [editedUser, setEditedUser] = useState({
    name: userName,
    age: storedUser.age,
    email: userEmail,
  });

  // Fetch user-specific data from the server
  useEffect(() => {
    async function fetchUserFareData() {
      try {
        const response = await axios.get(`http://localhost:8080/fare/profile/${userEmail}`);

        // Assuming the server response contains the user-specific data
        setUserFareData(response.data);
        // Handle the response data as needed
        console.log('User-specific data:', response.data);
      } catch (error) {
        console.error('Error while fetching user-specific data:', error);
      }
    }

    fetchUserFareData();
  }, [userEmail]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    // Handle the update logic here, e.g., save the edited user data
    // to your data source (e.g., API or database) and update the UI accordingly
    setIsEditing(false);

    // You can update the local storage with the edited user data if needed
    localStorage.setItem('name', editedUser.name);
    localStorage.setItem('userEmail', editedUser.email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };
  console.log(userFareData+" hello");
  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '100px', marginBottom: '150px' }}>
        <Paper
          sx={{
            // ... (your Paper styles)
          }}
        >
          <Typography variant="h5" gutterBottom>
            User Profile
          </Typography>
          {!isEditing ? (
            // Display user-specific data from the fetched response
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                Email: {userFareData ? userFareData.userEmail : editedUser.email}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                Name: {userFareData ? userFareData.userName : editedUser.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                Age: {userFareData ? userFareData.userAge : editedUser.age}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: '16px' }}>
                Recent
              </Typography>
            </Box>
          ) : (
            // Display user-specific data for editing
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                name="email"
                label="Email"
                value={editedUser.email}
                fullWidth
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                sx={{ marginBottom: '8px' }}
              />
              <TextField
                name="name"
                label="Name"
                value={editedUser.name}
                fullWidth
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                sx={{ marginBottom: '8px' }}
              />
              <TextField
                name="age"
                label="Age"
                value={editedUser.age}
                fullWidth
                onChange={handleInputChange}
                variant="outlined"
                margin="normal"
                sx={{ marginBottom: '8px' }}
              />
            </Box>
          )}
          <Box mt={2}>
            {isEditing ? (
              <Button variant="contained" color="primary" onClick={handleUpdateClick} sx={{ marginRight: '10px' }}>
                Update
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleEditClick} sx={{ marginRight: '10px' }}>
                Edit
              </Button>
            )}
            <Button variant="contained" color="error" onClick={() => window.location.href = "/login"}>
              Logout
            </Button>
            <Typography variant="h6" gutterBottom style={{ marginTop: '16px' }}>
              Recent Bookings
            </Typography>
            <List>
              {recentBookings.map((booking, index) => (
                <ListItem key={index}>
                  <ListItemText primary={booking} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default UserDetails;
