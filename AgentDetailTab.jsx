
import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const AgentDetailTab = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Agent Name" name="agentName" variant="outlined" required=true fullWidth=true />
    <TextField label="Agent Code" name="agentCode" variant="outlined" fullWidth=true />
    <Button color="primary" onClick={() => { /* navigate */ }}>Back</Button>
    <Button color="success" onClick={() => { /* submit */ }}>Save</Button>
  </Box>
);

export default AgentDetailTab;
