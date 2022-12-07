import React from "react";
import HeroText from "../components/heroText.component";
import { Grid } from "@mui/material";

export default function Home() {
  const styles = {
    heroImage: {
      height: "95vh",
    },
    partTwo: {
      height: "95vh",
    },
  };

  return (
    <Grid container>
      <Grid item xs={12} style={styles.heroImage} bgcolor="#f5daa3">
        <HeroText />
      </Grid>
      <Grid item xs={12} style={styles.partTwo} bgcolor="text.disabled"></Grid>
    </Grid>
  );
}
