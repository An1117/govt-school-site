import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import facilitiesData from "../data/facilities.json";

function Facilities() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center" color="primary">
        Our Facilities
      </Typography>

      <Typography variant="body1" paragraph align="center">
        We provide top-notch facilities to ensure holistic development of our students.
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mt: 2 }}>
        {facilitiesData.map((facility, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center" alignItems="stretch">
            <Card
              sx={{
                width: '100%',
                maxWidth: 350,
                mx: 'auto',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                boxShadow: 3,
                backgroundColor: '#F2F2F2',
                color: '#000',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
                m: { xs: 1, sm: 2 }, // ensures equal margin on all sides for all breakpoints
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={facility.image}
                alt={facility.name}
                sx={{ objectFit: 'cover', width: '100%', maxHeight: 180, borderRadius: '8px 8px 0 0' }}
              />
              <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">
                  {facility.name}
                </Typography>
                <Typography variant="body2">{facility.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Facilities;
