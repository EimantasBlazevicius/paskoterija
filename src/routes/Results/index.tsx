import React from "react";
import { Grid, Stack } from "@mui/material";
// @ts-ignore
import ProgressBar from "@ramonak/react-progress-bar";
import ContentWrapper from "../../components/shared/ContentWrapper";
import PaperCard from "../../components/shared/PaperCard";

const Results = () => {
  return (
    <ContentWrapper>
      <Grid container pt={5}>
        <Grid item xs={7} style={{ padding: "2rem", height: "50vh" }}>
          <PaperCard
            title="The game is yet to happen"
            actionButton="Get More Tickets"
            handleClick={() => console.log("clicked")}
            imageURL="./static/no-results-yet.jpg"
            imageHeight="300"
          />
        </Grid>

        <Grid item xs={5} style={{ padding: "2rem" }}>
          <PaperCard
            title="The game is yet to happen"
            actionButton="Get More Tickets"
            handleClick={() => console.log("clicked")}
            imageURL="./static/no-results-yet-2.jpg"
            imageHeight="300"
          />
        </Grid>

        <Grid item xs={7}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={4}
            px={10}
            minWidth={50}
          >
            <ProgressBar
              completed={55}
              maxCompleted={100}
              customLabel="€ 3769/9700"
              width="100vh"
            />
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={4}
            px={10}
            minWidth={50}
          >
            <ProgressBar
              completed={100}
              maxCompleted={100}
              customLabel="Small pot collected"
              width="70vh"
              labelAlignment="center"
            />
          </Stack>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Results;
