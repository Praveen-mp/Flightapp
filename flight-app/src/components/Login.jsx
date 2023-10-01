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

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleLogin = () => {
    // Perform authentication logic here (e.g., validate credentials with a server)
    // If authentication is successful, dispatch the loginSuccess action
    // Otherwise, display an error message
   
      const { email, password } = formData;
    
      // Retrieve user registration details from localStorage
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');
    
      // Check if user data is found in localStorage
      if (storedEmail && storedPassword) {
        // Validate login credentials against stored data
        console.log(storedEmail+" "+storedPassword);
        if (email === storedEmail && password === storedPassword) {
          const user = { email,password }; // You can include more user data here
          dispatch(loginSuccess(user));
          // Redirect to the home page or another route
          toast.success('Successfully logged in', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progressTheme: 'light',
          });
          window.location.href = '/landing';
        } else {
          // Display an error message for invalid credentials
          toast.error('Invalid email or password. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progressTheme: 'light',
          });
        }
      } else {
        // Display an error message if user data is not found in localStorage
        toast.error('User data not found. Please sign up first.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progressTheme: 'light',
        });
      }
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
    handleLogin();
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
                    <form onSubmit={handleSubmit}>
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
