import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  Button
} from '@mui/material';
import Navbar from './navbar'; // Assuming you already have this component

const UpcomingProjects = () => {
  return (
    <Box sx={{ backgroundColor: '#004d40', color: 'white', minHeight: '100vh', pb: 5, mt: '64px' }}>
      <Navbar />

      <Container sx={{ mt: 4 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontFamily: "'Dancing Script', cursive",
            color: 'white',
            mb: 3,
          }}
        >
          Upcoming Projects & Budget
        </Typography>

        <Paper sx={{ p: 3, backgroundColor: '#00695c', color: 'white', mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Project: Smart Village Initiative
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Aims to digitalize 10 rural villages by 2026 using solar-powered IoT devices,
                public Wi-Fi, and basic e-governance training.
              </Typography>
              <Typography sx={{ mt: 2 }}><strong>Start Date:</strong> August 2025</Typography>
              <Typography><strong>End Date:</strong> December 2026</Typography>
              <Typography><strong>Estimated Budget:</strong> ₹2.5 Crore</Typography>
            </Grid>

            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.iraindia.co.in&size=150x150"
                alt="QR Code"
                style={{ margin: 'auto' }}
              />
              <Typography variant="body2" sx={{ mt: 1 }}>
                Scan for details
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, backgroundColor: '#00695c', color: 'white' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            Other Upcoming Projects
          </Typography>

          <Divider sx={{ mb: 2, borderColor: '#b2dfdb' }} />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography><strong>1. Women Empowerment Drive</strong></Typography>
              <Typography>Budget: ₹75 Lakh</Typography>
              <Typography>Duration: Jan 2026 - Dec 2026</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography><strong>2. Forest Livelihood Enhancement</strong></Typography>
              <Typography>Budget: ₹1.2 Crore</Typography>
              <Typography>Duration: Mar 2026 - Mar 2027</Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: '#004d40' }}>
              View Detailed Report
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default UpcomingProjects;
