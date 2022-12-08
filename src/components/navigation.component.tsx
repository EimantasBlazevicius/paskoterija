import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  IconButton,
  Stack,
  Button,
  ButtonGroup,
  Drawer,
  Typography,
} from "@mui/material";

import Navigation from "./sideNav.component";
import { Link } from "react-router-dom";
import { UserContext } from "./../Context/userContext";

interface NavLineProps {
  toggleDrawer: (value: boolean) => void;
  menuOpen: boolean;
}

const NavLine = ({ toggleDrawer, menuOpen }: NavLineProps) => {
  const { logOut, loggedIn } = React.useContext(UserContext);

  return (
    <Stack direction="row" p="1rem" spacing={5} bgcolor="#f2a94d">
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon color="success" />
      </IconButton>
      <Drawer anchor="left" open={menuOpen} onClose={() => toggleDrawer(false)}>
        <Navigation toggleDrawer={toggleDrawer} />
      </Drawer>
      <Button startIcon={<PhoneIcon />} color="success" variant="text">
        <Typography variant="subtitle2" component="h5">
          +37060482010
        </Typography>
      </Button>
      <Button color="primary" variant="text" style={{ margin: "auto" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography color="secondary">Home Logo placeholder</Typography>
        </Link>
      </Button>
      {!loggedIn ? (
        <ButtonGroup>
          <Button variant="contained" color="secondary">
            <Link
              style={{ textDecoration: "none", color: "#ffffff" }}
              to="/auth/login"
            >
              Login
            </Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link
              style={{ textDecoration: "none", color: "#ffffff" }}
              to="/auth/register"
            >
              Register
            </Link>
          </Button>
        </ButtonGroup>
      ) : (
        <Button variant="contained" color="primary" onClick={logOut}>
          Logout
        </Button>
      )}
    </Stack>
  );
};

export default NavLine;
