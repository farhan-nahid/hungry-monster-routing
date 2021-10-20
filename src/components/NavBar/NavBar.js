import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hungry Monster
          </Typography>
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            to="/contact"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <Button color="inherit">Contact</Button>
          </NavLink>
          <NavLink
            to="/restaurant"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            <Button color="inherit">Restaurant</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
