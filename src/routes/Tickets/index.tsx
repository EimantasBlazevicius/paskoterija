import React from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import ContentWrapper from "./../../components/shared/ContentWrapper";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Tickets = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "Ticket ID", width: 150 },
    { field: "loan", headerName: "Related Loan", width: 170 },

    {
      field: "date_purchased",
      headerName: "Date of purchase",
      width: 150,
    },
    { field: "will_play", headerName: "Will ticket play", width: 120 },
  ];

  const rows = [
    {
      id: "#A000001",
      loan: "BigBank Car",
      date_purchased: "2022/12/10",
      will_play: "Yes",
    },
    {
      id: "#A000002",
      loan: "Savy Credit",
      date_purchased: "2022/12/10",
      will_play: "No",
    },
    {
      id: "#A000003",
      loan: "Swedbank Creditcard",
      date_purchased: "2022/12/10",
      will_play: "Yes",
    },
    {
      id: "#A000004",
      loan: "BigBank Car",
      date_purchased: "2022/12/10",
      will_play: "Yes",
    },
    {
      id: "#A000005",
      loan: "BigBank Car",
      date_purchased: "2022/12/10",
      will_play: "Yes",
    },
    {
      id: "#A000006",
      loan: "BigBank Car",
      date_purchased: "2022/12/10",
      will_play: "Yes",
    },
    {
      id: "#A000007",
      loan: "Savy Credit",
      date_purchased: "2022/12/10",
      will_play: "No",
    },
    {
      id: "#A000008",
      loan: "Savy Credit",
      date_purchased: "2022/12/10",
      will_play: "No",
    },
    {
      id: "#A000009",
      loan: "BigBank Car",
      date_purchased: "2022/12/10",
      will_play: "Yes",
    },
  ];

  return (
    <ContentWrapper>
      <Stack p={5} direction="row">
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Paper style={{ marginBottom: "20px" }}>
            <Card style={{ minWidth: "60vh" }}>
              <CardContent>
                <Typography style={{ marginBottom: "20px" }}>
                  Get your Tickets: € 1 each
                </Typography>
                <FormControl fullWidth style={{ marginBottom: "20px" }}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Loan to link to
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "loan",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={10}>Savy - 9000</option>
                    <option value={20}>Bigbank - 7300</option>
                    <option value={30}>Swebank - 170 000</option>
                  </NativeSelect>
                </FormControl>

                <FormControl fullWidth style={{ marginBottom: "20px" }}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Amount of tickets
                  </InputLabel>
                  <NativeSelect
                    defaultValue={1}
                    inputProps={{
                      name: "loan",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={5}>5</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                  </NativeSelect>
                </FormControl>

                <Typography variant="body1" style={{ marginBottom: "20px" }}>
                  € 50 = 50 tickets for Loan x
                </Typography>

                <Button variant="contained" startIcon={<ShoppingCartIcon />}>
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </Paper>
          <Paper style={{ marginBottom: "30px" }}>
            <Card style={{ minWidth: "60vh" }}>
              <CardContent>
                <Typography style={{ marginBottom: "20px" }}>
                  Donate any amount for karma points
                </Typography>
                <TextField
                  type="number"
                  label="Amount To Donate"
                  style={{ marginBottom: "20px" }}
                />
                <Typography variant="body1" style={{ marginBottom: "20px" }}>
                  x Amount will be added to Pot
                </Typography>

                <Button variant="contained" startIcon={<ThumbUpAltIcon />}>
                  Donate
                </Button>
              </CardContent>
            </Card>
          </Paper>
        </Stack>
        <Grid container marginLeft={3} columnGap={3}>
          <Grid item xs={3}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">
                    <strong>Total Tickets Bought</strong>
                  </Typography>
                  <Typography variant="h5" align="center">
                    995
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">
                    <strong>Total amount in game</strong>
                  </Typography>
                  <Typography variant="h5" align="center">
                    € 1 995
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">
                    <strong>Small pot total</strong>
                  </Typography>
                  <Typography variant="h5" align="center">
                    € 700
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: 420, width: "80%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={100}
                rowsPerPageOptions={[100]}
                style={{ paddingInline: 10 }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </ContentWrapper>
  );
};

export default Tickets;
