import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
  const [formData, setFormData] = useState({
    userName:'',
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
  });
  
  const handleSignup = () => {
    // Implement signup logic here, e.g., send data to the server
    // and handle success/failure accordingly
    // After successful signup, you can redirect to the login page
    localStorage.setItem('userEmail', formData.userEmail);
    localStorage.setItem('userPassword', formData.userPassword);
    const userData = {
      userName: formData.userName,
      userEmail: formData.userEmail,
      userPassword: formData.userPassword,
    };
     console.log(userData);
    // Make a POST request to the server to save the user data
    fetch('http://localhost:8080/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          // User data was successfully saved
          localStorage.setItem('userEmail', formData.userEmail);
          localStorage.setItem('userPassword', formData.userPassword);
          toast.success('Sign up successful!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setTimeout(() => {
            window.location.href = '/login';
          }, 3000);
        } else {
          // Handle error if the server request fails
          toast.error('Sign up failed. Please try again later.', {
            position: 'top-right',
            autoClose: 3000,  
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    handleSignup();
  };

  return (
    <div className="log-det d-flex justify-content-center align-items-center vh-100">
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 3,
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url('https://www.travelassociates.com/sites/v2.travel-associates.com.au/files/Flights-small-640x480.jpg')`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
                '@media (max-width: 600px)': {
                  // Adjust background size for small screens
                  backgroundSize: "contain",
                },
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <Card style={{ width: '400px' }}>
                  <CardContent style={{ border: 'none' }}> */}
                    <Typography variant="h5" component="div" className="text-center">
                      Sign Up
                    </Typography>
                    <form  noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        type="text"
                        placeholder="Enter name"
                        variant="outlined"
                        margin="normal"
                        className="mb-3"
                        name="userName"
                        required
                        value={formData.userName}
                        onChange={handleInputChange}
                      />
                      <TextField
                        label="Email address"
                        fullWidth
                        type="email"
                        placeholder="Enter email"
                        variant="outlined"
                        margin="normal"
                        className="mb-3"
                        name="userEmail"
                        value={formData.userEmail}
                        required
                        onChange={handleInputChange}
                      />
                      <TextField
                        label="Password"
                        fullWidth
                        type="password"
                        placeholder="Password"
                        variant="outlined"
                        margin="normal"
                        name="userPassword"
                        value={formData.userPassword}
                        required
                        onChange={handleInputChange}
                      />
                      <TextField
                        label="Confirm Password"
                        fullWidth
                        type="password"
                        placeholder="Confirm password"
                        variant="outlined"
                        margin="normal"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        required
                        onChange={handleInputChange}
                      />
                      <Button
                        variant="contained"
                        color="error"
                        type="submit"
                        className="mb-4"
                        fullWidth
                      >
                        Sign up
                      </Button>
                      <div className="text-center">
                        <Typography>Already a member?</Typography>
                        <Button
                          onClick={() => (window.location.href = '/login')}
                          style={{
                            textDecoration: 'none',
                            color: 'red',
                            backgroundColor: 'white',
                            border: 'none',
                            marginBottom: '5px',
                          }}
                        >
                          Log In
                        </Button>
                        <Typography>or sign up with:</Typography>
                        <div className="d-flex justify-content-between mx-auto" style={{ width: '50%' }}>
                          <IconButton variant="outlined" className="log-hov m-1">
                            <FacebookIcon style={{ color: 'GrayText' }} />
                          </IconButton>
                          <IconButton variant="outlined" className="log-hov m-1">
                            <TwitterIcon style={{ color: 'GrayText' }} />
                          </IconButton>
                          <IconButton variant="outlined" className="log-hov m-1">
                            <GoogleIcon style={{ color: 'GrayText' }} />
                          </IconButton>
                          <IconButton variant="outlined" className="log-hov m-1">
                            <GitHubIcon style={{ color: 'GrayText' }} />
                          </IconButton>
                        </div>
                      </div>
                    </form>
                  {/* </CardContent>
                </Card> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Signup;
