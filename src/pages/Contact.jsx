// src/pages/Contact.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";

export default function Contact() {
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
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>
          We’re here to answer your questions
        </Typography>
      </Box>

      {/* Contact Info & Form */}
      <Container sx={{ my: 6 }}>
        <Grid container spacing={4} alignItems="stretch">
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Card sx={{ height: "100%", backgroundColor: '#F2F2F2', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Address:</strong> Government School, Main Road, Patiala, Punjab, India
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Phone:</strong> +91 98765 43210
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Email:</strong> schoolname@example.com
                </Typography>
                <Typography variant="body1">
                  Our office hours are Monday to Saturday, 9:00 AM – 4:00 PM.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ height: '100%', backgroundColor: '#F2F2F2', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Send Us a Message
                </Typography>
                <Box
                  component="form"
                  sx={{ mt: 2 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Message submitted!");
                  }}
                >
                  <TextField
                    label="Full Name"
                    fullWidth
                    required
                    sx={{ mb: 2, backgroundColor: '#EAE4D5', borderRadius: 1 }}
                  />
                  <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                    required
                    sx={{ mb: 2, backgroundColor: '#EAE4D5', borderRadius: 1 }}
                  />
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    sx={{ mb: 2, backgroundColor: '#EAE4D5', borderRadius: 1 }}
                  />
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#B6B09F', color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#F2F2F2', color: '#000' } }}
                    type="submit"
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Map Embed */}
        <Box sx={{ mt: 6 }}>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
}
