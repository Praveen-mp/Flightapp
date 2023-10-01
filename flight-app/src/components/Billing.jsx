import React, { useState } from 'react';
import { Container, Paper, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import { Payment } from '@mui/icons-material';
import Header from './Header';
import Footer from './Footer';

function BillingSection() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'cardNumber':
        setCardNumber(value);
        break;
      case 'expirationDate':
        setExpirationDate(value);
        break;
      case 'cvv':
        setCvv(value);
        break;
      case 'cardHolderName':
        setCardHolderName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing logic here
    // You can use a payment gateway library or API to securely process payments
    console.log('Processing payment...');
  };

  return (
    <div>
      <Header />
      <Container>
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px',marginBottom:'30px' }}>
          <Typography variant="h4" gutterBottom>
            Billing Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Card Number"
                  fullWidth
                  variant="outlined"
                  name="cardNumber"
                  value={cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Expiration Date"
                  fullWidth
                  variant="outlined"
                  name="expirationDate"
                  value={expirationDate}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="CVV"
                  fullWidth
                  variant="outlined"
                  name="cvv"
                  value={cvv}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Cardholder Name"
                  fullWidth
                  variant="outlined"
                  name="cardHolderName"
                  value={cardHolderName}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  startIcon={<Payment />}
                >
                  Make Payment
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Footer/>
    </div>
  );
}

export default BillingSection;
