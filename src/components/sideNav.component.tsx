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
import { useNavigate } from "react-router-dom";

interface SideNavProps {
  toggleDrawer: (value: boolean) => void;
}

const SideNav = ({ toggleDrawer }: SideNavProps) => {
  const { loggedIn } = React.useContext(UserContext);
  const navigate = useNavigate();

  const navConfig = [
    {
      path: "/",
      icon: <HomeIcon color="info" />,
      label: "Home",
      authNeeded: false,
    },
    {
      path: "/results",
      icon: <MoodIcon color="error" />,
      label: "Results",
      authNeeded: true,
    },
    {
      path: "/loans",
      icon: <AccountBalanceIcon color="info" />,
      label: "My loans",
      authNeeded: true,
    },
    {
      path: "/tickets",
      icon: <ConfirmationNumberIcon color="info" />,
      label: "My Tickets",
      authNeeded: true,
    },
    {
      path: "/statistics",
      icon: <HistoryIcon color="warning" />,
      label: "Statistics",
      authNeeded: true,
      divider: true,
    },
    {
      path: "/covered-loans",
      icon: <DoneAllIcon color="success" />,
      label: "Covered loans",
      authNeeded: false,
    },
    {
      path: "/team",
      icon: <Diversity1Icon color="secondary" />,
      label: "Team",
      authNeeded: false,
    },
    {
      path: "/about",
      icon: <InfoIcon color="secondary" />,
      label: "About",
      authNeeded: false,
    },
    {
      path: "/legal",
      icon: <PolicyIcon color="info" />,
      label: "Legal stuff",
      authNeeded: false,
    },
    {
      path: "/contacts",
      icon: <ContactsIcon color="info" />,
      label: "Contacts",
      authNeeded: false,
    },
  ];

  return (
    <Box
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {navConfig.map((item) => (
          <>
            {(!item.authNeeded || item.authNeeded === loggedIn) && (
              <ListItem onClick={() => navigate(item.path)}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            )}
            {item.divider && <Divider />}
          </>
        ))}
      </List>
    </Box>
  );
};

export default SideNav;
