import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import Navbar from './navbar'; // use your existing Navbar

// ✅ Dummy image URLs
const galleryImages = [
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1016/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1024/600/400',
  'https://picsum.photos/id/1027/600/400',
  'https://picsum.photos/id/1035/600/400',
  'https://picsum.photos/id/1043/600/400',
  'https://picsum.photos/id/1050/600/400',
];

const PhotoGallery = () => {
  return (
    <Box sx={{ backgroundColor: '#004d40', color: 'white', minHeight: '100vh', pb: 5, mt: '65px' }}>
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
          Gallery
        </Typography>

        <Paper sx={{ p: 3, backgroundColor: '#00695c' }}>
          <Grid container spacing={3}>
            {galleryImages.map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <img
                  src={src}
                  alt={`gallery-${index}`}
                  style={{
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default PhotoGallery;
