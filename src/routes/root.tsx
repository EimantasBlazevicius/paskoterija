import React from "react";
import Container from "@mui/material/Container";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NavLine from "../components/navigation.component";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <Container maxWidth="xl" disableGutters>
      <NavLine toggleDrawer={toggleDrawer} menuOpen={menuOpen} />
      <Outlet />
    </Container>
  );
}
