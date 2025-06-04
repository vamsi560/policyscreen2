
import React from 'react';
import { Box, Button, DatePicker, TextField } from '@mui/material';

const InsuredDetailTab = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Insured Name" name="insuredName" variant="outlined" required=true fullWidth=true />
    <DatePicker label="Date of Birth" name="dateOfBirth" variant="outlined" fullWidth=true format="MM/DD/YYYY" />
    <Button color="primary" onClick={() => { /* navigate */ }}>Back</Button>
    <Button color="success" onClick={() => { /* submit */ }}>Save</Button>
  </Box>
);

export default InsuredDetailTab;
