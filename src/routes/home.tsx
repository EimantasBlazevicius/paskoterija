import React from "react";
import HeroText from "../components/heroText.component";
import { Grid, IconButton, Stack } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Home() {
  const styles = {
    heroImage: {
      height: "80vh",
    },
    partTwo: {
      height: "95vh",
    },
  };

  const ref = React.useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid container>
      <Grid item xs={12} style={styles.heroImage} bgcolor="#f5daa3">
        <HeroText />
        <Stack justifyContent="center" mt="10vh">
          <IconButton
            style={{ margin: "auto" }}
            aria-label="show more"
            onClick={handleClick}
          >
            <KeyboardDoubleArrowDownIcon />
          </IconButton>
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        ref={ref}
        style={styles.partTwo}
        bgcolor="text.disabled"
      ></Grid>
      <Grid item xs={12} style={styles.partTwo} bgcolor="primary.main"></Grid>
    </Grid>
  );
}
