// src/pages/About.jsx
import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from "@mui/material";

export default function About() {
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
        <Typography variant="h3" fontWeight="bold">
          About Our School
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Nurturing excellence for a brighter future
        </Typography>
      </Box>

      {/* About Text */}
      <Container sx={{ my: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center" sx={{ color: '#000' }}>
          Who We Are
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ maxWidth: "800px", mx: "auto", mb: 4, color: '#000' }}
        >
          Our government school has been serving the community for decades, offering quality
          education to students from all walks of life. We focus on holistic development,
          nurturing both academic and extracurricular talents.
        </Typography>

        {/* Mission & Vision */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", backgroundColor: '#F2F2F2', color: '#000' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  To provide affordable, inclusive, and high-quality education that prepares
                  students for success in life and careers, while instilling values of integrity
                  and responsibility.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", backgroundColor: '#F2F2F2', color: '#000' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1">
                  To be a leading institution that inspires students to become lifelong learners,
                  innovators, and compassionate citizens.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Principal Section */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Avatar
            src="https://via.placeholder.com/150"
            alt="Principal"
            sx={{ width: 150, height: 150, mx: "auto", mb: 2, bgcolor: '#F2F2F2' }}
          />
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#000' }}>
            Principal's Message
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "700px", mx: "auto", mt: 1, color: '#000' }}
          >
            We believe every child has the potential to achieve greatness. Our dedicated staff
            and supportive environment ensure that each student gets the attention and
            resources they need.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
