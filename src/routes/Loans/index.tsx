import React from "react";
import ContentWrapper from "../../components/shared/ContentWrapper";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import PaperCard from "./../../components/shared/PaperCard";
import AddIcon from "@mui/icons-material/Add";

const Loans = () => {
  return (
    <ContentWrapper>
      <Grid container p={5}>
        <Grid item xs={3} mx={1}>
          <PaperCard
            title="Savy - Participating"
            description="This loan is for €50 489, you own 3 tickets for this loan and your win chance is 2%"
            actionButton="Edit loan details"
            handleClick={() => {
              console.log("Cliked");
            }}
          />
        </Grid>
        <Grid item xs={3} mx={1}>
          <PaperCard
            title="BigBank - Participating"
            description="This loan is for €12 489, you own 17 tickets for this loan and your win chance is 10%"
            actionButton="Edit loan details"
            handleClick={() => {
              console.log("Cliked");
            }}
          />
        </Grid>
        <Grid item xs={3} mx={1}>
          <PaperCard
            title="Savy - Participating"
            description="This loan is for €50 489, you own 3 tickets for this loan and your win chance is 7%"
            actionButton="Edit loan details"
            handleClick={() => {
              console.log("Cliked");
            }}
          />
        </Grid>
        <Grid item xs={3} mx={1}>
          <Button>
            <Paper elevation={2}>
              <Card variant="outlined" style={{ textAlign: "center" }}>
                <CardContent>
                  <AddIcon style={{ height: 75, fontSize: "70px" }} />
                  <Typography gutterBottom variant="h5">
                    Add New Loan
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Button>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Loans;
