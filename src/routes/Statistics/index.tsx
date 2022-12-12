import { Card, CardContent, Grid, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../components/shared/ContentWrapper";
import { UserContext } from "../../Context/userContext";

const Statistics = () => {
  const { loggedIn } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    !loggedIn && navigate("/auth/login");
  }, []);

  return (
    <ContentWrapper>
      <Grid container justifyContent="center" columnGap={2} pt={5}>
        <Grid item xs={2}>
          <Paper>
            <Card>
              <CardContent></CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default Statistics;
