import React, { useState } from 'react';
import { Container, Paper, Typography, List, ListItem, ListItemText, Box, Button, TextField } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const UserDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const storedUser = JSON.parse(localStorage.getItem('userProfile'));
  const userName = localStorage.getItem('name');
  const recentBookings = JSON.parse(localStorage.getItem('recentBookings')) || [];
  const userEmail = localStorage.getItem('userEmail');

  const [editedUser, setEditedUser] = useState({
    name: userName,
    age: storedUser.age,
    email: userEmail,
  });

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

  return (
    <div>
      <Header />
      <Container sx={{ marginTop: '100px', marginBottom: '150px' }}>
        <Paper sx={{ 
          width: '60rem', 
          margin: 'auto', 
          padding: '16px', 
          backgroundColor:'#F5F5F5',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease', // Add transition for smooth effect
          '&:hover': {
           boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)', // New shadow on hover
      }, }}>
          <Typography variant="h5" gutterBottom>
            User Profile
          </Typography>
          {!isEditing ? (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Email: {editedUser.email}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Name: {editedUser.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
              Age: {editedUser.age}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', marginTop: '16px' }}>
              Recent
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* ... (your existing code) */}
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
            <Button variant='contained' color='error' onClick={() => window.location.href = "/login"}>
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
