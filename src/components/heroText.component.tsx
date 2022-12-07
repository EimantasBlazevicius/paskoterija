import React from "react";
import { Stack, Typography } from "@mui/material";

const HeroText = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      direction="column"
      mt="25vh"
    >
      <Typography variant="h1">Debt lottery</Typography>

      <Typography variant="h6" paragraph>
        Crowdfund random loans
      </Typography>
    </Stack>
  );
};

export default HeroText;
