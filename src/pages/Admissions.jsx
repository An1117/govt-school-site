import React from "react";
import { Container, Typography, Box, Paper, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import admissionData from "../data/admission.json";

function Admission() {
  const { importantDates, eligibility, documents, steps } = admissionData;

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center" color="primary">
        Admission Information
      </Typography>

      <Typography variant="body1" paragraph align="center">
        Welcome to the admission section of Govt. School. Below you will find all the necessary details to guide you through the application process.
      </Typography>

      {/* Important Dates */}
      <Paper sx={{ p: 3, backgroundColor: "#f0f4ff", borderLeft: "6px solid #1976d2", mb: 4 }}>
        <Typography variant="h6" fontWeight="bold">
          Important Dates:
        </Typography>
        <Typography variant="body2">Admission Start: <b>{importantDates.start}</b></Typography>
        <Typography variant="body2">Last Date to Apply: <b>{importantDates.end}</b></Typography>
        <Typography variant="body2">Entrance Test: <b>{importantDates.test}</b></Typography>
      </Paper>

      {/* Eligibility */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Eligibility Criteria
        </Typography>
        <List>
          {eligibility.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Documents Required */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Documents Required
        </Typography>
        <List>
          {documents.map((doc, index) => (
            <ListItem key={index}>
              <ListItemText primary={doc} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Steps to Apply */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Steps to Apply
        </Typography>
        <List>
          {steps.map((step, index) => (
            <ListItem key={index}>
              <ListItemText primary={step} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" mt={5}>
        <Button variant="contained" color="primary" size="large">
          Apply Now
        </Button>
      </Box>
    </Container>
  );
}

export default Admission;
