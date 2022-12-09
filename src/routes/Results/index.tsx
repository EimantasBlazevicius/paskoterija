import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
// @ts-ignore
import ProgressBar from "@ramonak/react-progress-bar";
import ContentWrapper from "../../components/shared/ContentWrapper";

const Results = () => {
  return (
    <ContentWrapper>
      <Grid container pt={5}>
        <Grid item xs={7} style={{ padding: "2rem", height: "50vh" }}>
          <Paper elevation={2}>
            <Card variant="outlined" style={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                height="300"
                image="./static/no-results-yet.jpg"
                alt="waiting for results"
              />
              <CardContent>
                <Typography variant="h5">The game is yet to happen</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Get More Tickets</Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={5} style={{ padding: "2rem" }}>
          <Paper elevation={2}>
            <Card variant="outlined" style={{ textAlign: "center" }}>
              <CardMedia
                component="img"
                height="300"
                image="./static/no-results-yet-2.jpg"
                alt="waiting for results"
              />
              <CardContent>
                <Typography variant="h5">The game is yet to happen</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Get More Tickets</Button>
              </CardActions>
            </Card>
          </Paper>
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
