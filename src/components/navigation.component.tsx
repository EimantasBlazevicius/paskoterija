import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SendIcon from "@mui/icons-material/Send";

import {
  IconButton,
  Stack,
  Button,
  ButtonGroup,
  Drawer,
  Typography,
  Divider,
} from "@mui/material";

import Navigation from "./sideNav.component";
import { Link } from "react-router-dom";
import { UserContext } from "./../Context/userContext";

interface NavLineProps {
  toggleDrawer: (value: boolean) => void;
  menuOpen: boolean;
}

const NavLine = ({ toggleDrawer, menuOpen }: NavLineProps) => {
  const { logOut, loggedIn, userData } = React.useContext(UserContext);

  return (
    <Stack direction="row" p="1rem" spacing={5} bgcolor="#f2a94d">
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon color="success" />
      </IconButton>
      <Drawer anchor="left" open={menuOpen} onClose={() => toggleDrawer(false)}>
        <Navigation toggleDrawer={toggleDrawer} />
      </Drawer>
      <Divider style={{ marginLeft: "auto" }} />
      <Button startIcon={<PhoneIcon />} color="success" variant="text">
        <Typography variant="subtitle2" component="h5">
          +37060482010
        </Typography>
      </Button>
      <Button startIcon={<SendIcon />} color="success" variant="text">
        <Typography variant="subtitle2" component="h5">
          support@debtlottery.com
        </Typography>
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
        <ButtonGroup>
          <Button startIcon={<AccountBoxIcon />}>
            <Link
              style={{ textDecoration: "none", color: "#1976d2" }}
              to="/profile"
            >
              {userData.name}
            </Link>
          </Button>
          <Button variant="contained" color="primary" onClick={logOut}>
            Logout
          </Button>
        </ButtonGroup>
      )}
    </Stack>
  );
};

export default NavLine;
