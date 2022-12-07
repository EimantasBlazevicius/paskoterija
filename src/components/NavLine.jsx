import React from "react";
import { saveNote } from "../firestoreConfig";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  IconButton,
  Stack,
  Button,
  ButtonGroup,
  Drawer,
  Typography,
  Link,
} from "@mui/material";

import Navigation from "./../components/Navigation";

const NavLine = ({ toggleDrawer, menuOpen }) => {
  return (
    <Stack direction="row" p="1rem" spacing={5} justifyContent="space-between">
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon color="success" />
      </IconButton>
      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
        <Navigation toggleDrawer={toggleDrawer} />
      </Drawer>
      <Button startIcon={<PhoneIcon />} color="secondary" variant="text">
        <Typography variant="subtitle2" component="h5">
          +37060482010
        </Typography>
      </Button>
      <ButtonGroup>
        <Button
          variant="contained"
          color="success"
          href="/authentication/login"
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="/authentication/register"
        >
          Register
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default NavLine;
