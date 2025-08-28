import React, { useEffect } from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import activitiesData from "../data/activities.json";
import AOS from "aos";
import "aos/dist/aos.css";

function Extracurricular() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center" color="primary">
        Extracurricular Activities
      </Typography>

      <Typography variant="body1" paragraph align="center">
        Our school encourages students to explore talents beyond academics.
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mt: 2 }}>
        {activitiesData.map((activity, index) => (
          <Grid
            item
            xs={12}
            sm={8}
            md={4}
            key={index}
            display="flex"
            justifyContent="center"
            alignItems="stretch"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
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
                m: { xs: 1, sm: 2 },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={activity.image}
                alt={activity.name}
                sx={{ objectFit: 'cover', width: '100%', maxHeight: 180, borderRadius: '8px 8px 0 0' }}
              />
              <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">
                  {activity.name}
                </Typography>
                <Typography variant="body2">{activity.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Extracurricular;
