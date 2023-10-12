import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/userAction';
import { login } from '../services/Api';
import axios from 'axios'
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const url="http://localhost:8080"
  const handleLogin = async(event) => {
    event.preventDefault();
    const userData={
      userEmail:formData.email,
      userPassword:formData.password
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    axios.post(`${url}/login`, userData, { headers })
   .then(response => {
    // Handle the response
    console.log('Response Status:', response.status);
    console.log('Response Data:', response.data);
    localStorage.setItem('token',response.data.token);
    toast.success('Sign in successful!', {
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
      window.location.href="/landing";
    }, 3000);
    
    console.log('Response Headers:', response.headers);
  })
  .catch(error => {
    // Handle the error


    toast.error('Invalid email or password!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    

    console.error('Axios Error:', error);
  });
    };


  // validation
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  return (
    <div className="log-det d-flex justify-content-center align-items-center vh-100">
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 5,
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
                      Sign In
                    </Typography>
                    <form onSubmit={handleLogin}>
                      
                    

                      <TextField
                        label="Email address"
                        fullWidth
                        type="email"
                        placeholder="Enter email"
                        variant="outlined"
                        margin="normal"
                        className="mb-3"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <TextField
                        label="Password"
                        fullWidth
                        type="password"
                        placeholder="Password"
                        variant="outlined"
                        margin="normal"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <Grid container justifyContent="space-between" alignItems="center" className="mb-4">
                        <Grid item>
                          <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Remember me"
                          />
                        </Grid>
                        <Grid item>
                          <Link href="!#" style={{ textDecoration: 'none', color: 'red' }}>
                            Forgot password?
                          </Link>
                        </Grid>
                      </Grid>

                      <Button
                        variant="contained"
                        color="error"
                        type="submit"
                        className="mb-4"
                        fullWidth
                        
                      >
                        Sign in
                      </Button>
                      <div className="text-center">
                        <Typography>Not a member?</Typography>
                        <Button
                          onClick={() => (window.location.href = '/signup')}
                          style={{
                            textDecoration: 'none',
                            color: 'red',
                            backgroundColor: 'white',
                            border: 'none',
                            marginBottom: '5px',
                          }}
                        >
                          Register
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progressTheme="light"
      />
    </div>
  );
}

export default Login;
