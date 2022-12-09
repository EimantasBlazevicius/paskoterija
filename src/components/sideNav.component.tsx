import React from "react";
import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MoodIcon from "@mui/icons-material/Mood";
import HistoryIcon from "@mui/icons-material/History";
import PolicyIcon from "@mui/icons-material/Policy";

import { UserContext } from "./../Context/userContext";
import { Link } from "react-router-dom";

interface SideNavProps {
  toggleDrawer: (value: boolean) => void;
}

const SideNav = ({ toggleDrawer }: SideNavProps) => {
  const { loggedIn } = React.useContext(UserContext);

  return (
    <Box
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      {loggedIn && (
        <>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>{<HomeIcon color="info" />}</ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  <ListItemText primary="Home" />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>{<MoodIcon color="error" />}</ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/results"
                >
                  <ListItemText primary="Results" />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {<AccountBalanceIcon color="info" />}
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/loans"
                >
                  <ListItemText primary="My loans" />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {<ConfirmationNumberIcon color="info" />}
                </ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/tickets"
                >
                  <ListItemText primary="My Tickets" />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>{<HistoryIcon color="warning" />}</ListItemIcon>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/statistics"
                >
                  <ListItemText primary="Statistics" />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>

          <Divider color="warning" />
        </>
      )}
      <List>
        {!loggedIn && (
          <ListItem>
            <ListItemButton>
              <ListItemIcon>{<HomeIcon color="info" />}</ListItemIcon>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItemButton>
          </ListItem>
        )}
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<DoneAllIcon color="success" />}</ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/covered-loans"
            >
              <ListItemText primary="Covered loans" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<Diversity1Icon color="secondary" />}</ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/team"
            >
              <ListItemText primary="Team" />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<InfoIcon color="secondary" />}</ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/about"
            >
              <ListItemText primary="About the idea" />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<PolicyIcon color="info" />}</ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/legal"
            >
              <ListItemText primary="Legal stuff" />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<ContactsIcon color="info" />}</ListItemIcon>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/contacts"
            >
              <ListItemText primary="Contacts" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideNav;
