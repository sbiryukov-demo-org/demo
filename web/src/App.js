import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleGenerate = () => {
    setQrValue(url);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          URL to QR Code Generator
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Enter URL"
            variant="outlined"
            value={url}
            onChange={handleInputChange}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleGenerate} sx={{ py: 1.5 }}>
            Generate QR Code
          </Button>
        </Box>
        {qrValue && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <QRCodeCanvas value={qrValue} size={200} />
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
