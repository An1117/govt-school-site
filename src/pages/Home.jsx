// src/pages/Homepage.jsx
import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent, Container } from "@mui/material";


export default function Homepage() {
  return (
  <Box sx={{ backgroundColor: '#EAE4D5', minHeight: '100vh', color: '#000' }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#F2F2F2",
          color: "#000",
          textAlign: "center",
          py: 8,
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Government School Name
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          “Inspiring Minds, Shaping Futures”
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#B6B09F",
            color: '#000',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#F2F2F2', color: '#000' },
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Highlights Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: '#000' }}>
          School Highlights
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "20+ Teachers", desc: "Qualified and experienced staff" },
            { title: "1000+ Students", desc: "A thriving learning community" },
            { title: "10+ Clubs", desc: "Extracurricular opportunities for all" },
          ].map((item, index) => (
            <Grid item xs={12} sm={8} md={4} key={index} display="flex" justifyContent="center">
              <Card sx={{ width: '100%', maxWidth: 350, mx: 'auto', minHeight: 140, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', color: '#000', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" align="center" sx={{ fontSize: '1.25rem' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ fontSize: '1rem' }}>{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Latest News Section */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: '#000' }}>
          Latest News
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Annual Sports Day", desc: "Celebrating sportsmanship and talent." },
            { title: "Science Fair", desc: "Showcasing innovative projects." },
            { title: "Cultural Fest", desc: "An evening of performances and fun." },
          ].map((news, index) => (
            <Grid item xs={12} sm={8} md={4} key={index} display="flex" justifyContent="center">
              <Card sx={{ width: '100%', maxWidth: 350, mx: 'auto', minHeight: 140, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', color: '#000', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" align="center" sx={{ fontSize: '1.25rem' }}>
                    {news.title}
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ fontSize: '1rem' }}>{news.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
