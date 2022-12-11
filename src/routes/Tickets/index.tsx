import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  NativeSelect,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ContentWrapper from "./../../components/shared/ContentWrapper";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Tickets = () => {
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
        <Stack direction="column"></Stack>
      </Stack>
    </ContentWrapper>
  );
};

export default Tickets;
