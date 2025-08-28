import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import messagesData from "../data/messages.json";

function Messages() {
  const { principal, teachers, students } = messagesData;

  const renderCards = (items) => (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {item.role}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {item.message}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center" color="primary">
        Messages
      </Typography>

      {/* Principal Messages */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
        From Principal
      </Typography>
      {renderCards(principal)}

      {/* Teacher Messages */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 6 }}>
        From Teachers
      </Typography>
      {renderCards(teachers)}

      {/* Student Messages */}
      <Typography variant="h5" fontWeight="bold" sx={{ mt: 6 }}>
        From Students
      </Typography>
      {renderCards(students)}
    </Container>
  );
}

export default Messages;
