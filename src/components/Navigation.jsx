import React from "react";
import { saveNote } from "../firestoreConfig";
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
import SettingsIcon from "@mui/icons-material/Settings";

const Navigation = ({ toggleDrawer }) => {
  return (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<HomeIcon color="info" />}</ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<MoodIcon color="error" />}</ListItemIcon>
            <ListItemText primary="Results" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<AccountBalanceIcon color="info" />}</ListItemIcon>
            <ListItemText primary="My loans" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              {<ConfirmationNumberIcon color="info" />}
            </ListItemIcon>
            <ListItemText primary="My Tickets" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<HistoryIcon color="warning" />}</ListItemIcon>
            <ListItemText primary="History" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<SettingsIcon color="success" />}</ListItemIcon>
            <ListItemText primary="Account details" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider color="warning" />

      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<DoneAllIcon color="success" />}</ListItemIcon>
            <ListItemText primary="Success stories" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<Diversity1Icon color="secondary" />}</ListItemIcon>
            <ListItemText primary="Team" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<InfoIcon color="secondary" />}</ListItemIcon>
            <ListItemText primary="About the idea" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>{<ContactsIcon color="info" />}</ListItemIcon>
            <ListItemText primary="Contacts" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Navigation;
