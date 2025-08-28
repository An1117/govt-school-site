import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Pages in the slide-in menu (excluding Home, About, Contact)
  const drawerPages = [
    { text: "Admissions", link: "/admissions" },
    { text: "Facilities", link: "/facilities" },
    { text: "Extracurriculars", link: "/extracurriculars" },
    { text: "Rules", link: "/rules" },
    { text: "Messages", link: "/messages" },
    { text: "School View", link: "/school-view" }
  ];

  return (
    <>
      {/* Top Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#B6B09F" }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "#000",
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem" },
              letterSpacing: 1
            }}
          >
            Govt. School
          </Typography>
          <Box>
            <Button
              sx={{
                color: "#000",
                fontWeight: "bold",
                backgroundColor: "#F6F1DE",
                border: "2px solid #fff",
                mx: 0.5,
                fontSize: "1rem"
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{
                color: "#000",
                fontWeight: "bold",
                backgroundColor: "#F6F1DE",
                border: "2px solid #fff",
                mx: 0.5,
                fontSize: "1rem"
              }}
              component={Link}
              to="/about"
            >
              About
            </Button>
            <Button
              sx={{
                color: "#000",
                fontWeight: "bold",
                backgroundColor: "#F6F1DE",
                border: "2px solid #fff",
                mx: 0.5,
                fontSize: "1rem"
              }}
              component={Link}
              to="/contact"
            >
              Contact
            </Button>

            {/* Menu Button */}
            <IconButton
              edge="end"
              sx={{ color: "#000", ml: 1 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Slide-in Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#F2F2F2", // Dark red background
            color: "black"
          }
        }}
      >
        {/* Menu Title */}
        <Box
          sx={{
            p: 2,
            textAlign: "center",
            borderBottom: "1px solid rgba(255,255,255,0.3)"
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Menu
          </Typography>
        </Box>

        {/* Menu Items */}
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {drawerPages.map((page) => (
              <ListItem key={page.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={page.link}
                  sx={{
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#EAE4D5",
                      transform: "translateX(5px)"
                    }
                  }}
                >
                  <ListItemText
                    primary={page.text}
                    primaryTypographyProps={{ fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
