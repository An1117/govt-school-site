import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import rulesData from "../data/rules.json";

function Rules() {
  const { generalRules, classroomRules, disciplineRules } = rulesData;

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center" color="primary">
        School Rules & Regulations
      </Typography>

      <Typography variant="body1" paragraph align="center">
        Our school follows a structured set of rules to maintain discipline and ensure a safe, productive environment.
      </Typography>

      {/* General Rules */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          General Rules
        </Typography>
        <List>
          {generalRules.map((rule, index) => (
            <ListItem key={index}>
              <ListItemText primary={rule} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Classroom Rules */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Classroom Rules
        </Typography>
        <List>
          {classroomRules.map((rule, index) => (
            <ListItem key={index}>
              <ListItemText primary={rule} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Discipline Rules */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Discipline Rules
        </Typography>
        <List>
          {disciplineRules.map((rule, index) => (
            <ListItem key={index}>
              <ListItemText primary={rule} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

export default Rules;
