
import React from 'react';
import { Box, Button, Select, TextField } from '@mui/material';

const BillingMiscTab = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Billing Address" name="billingAddress" variant="outlined" fullWidth=true multiline=true rows=4 />
    <Select label="Payment Method" name="paymentMethod" variant="outlined" fullWidth=true options=[{"value": "creditCard", "label": "Credit Card"}, {"value": "bankTransfer", "label": "Bank Transfer"}, {"value": "paypal", "label": "PayPal"}] />
    <Button color="primary" onClick={() => { /* navigate */ }}>Back</Button>
    <Button color="success" onClick={() => { /* submit */ }}>Save</Button>
  </Box>
);

export default BillingMiscTab;
