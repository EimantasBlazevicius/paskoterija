import { Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import ContentWrapper from "../../components/shared/ContentWrapper";

const columns: GridColDef[] = [
  { field: "id", headerName: "Loan ID", width: 150 },
  { field: "loan", headerName: "Loan definition", width: 200 },
  {
    field: "ticket_ticket_date_purchased",
    headerName: "Ticket Date",
    width: 150,
  },
  { field: "amount_covered", headerName: "Covered amount", width: 120 },
];

const rows = [
  {
    id: "#A000001",
    loan: "BigBank Car",
    ticket_ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 350 000",
  },
  {
    id: "#A000002",
    loan: "Savy Credit",
    ticket_ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 650 000",
  },
  {
    id: "#A000003",
    loan: "Swedbank Creditcard",
    ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 1 350 000",
  },
  {
    id: "#A000004",
    loan: "BigBank Car",
    ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 350",
  },
  {
    id: "#A000005",
    loan: "BigBank Car",
    ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 323 789",
  },
  {
    id: "#A000006",
    loan: "BigBank Car",
    ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 350 000",
  },
  {
    id: "#A000007",
    loan: "Savy Credit",
    ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 350 000",
  },
  {
    id: "#A000008",
    loan: "Savy Credit",
    ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 350 000",
  },
  {
    id: "#A000009",
    loan: "BigBank Car",
    ticket_date_purchased: "2022/12/10",
    amount_covered: "€ 350 000",
  },
];

const CoveredLoans = () => {
  return (
    <ContentWrapper>
      <Grid container justifyContent="left" columnGap={2} p={5}>
        <Grid item xs={6}>
          <Paper style={{ height: "80vh", width: "100vh" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={100}
              rowsPerPageOptions={[100]}
              style={{ paddingInline: 10 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Grid item xs={12}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">
                    <strong>Total Tickets Loans covered</strong>
                  </Typography>
                  <Typography variant="h5" align="center">
                    75
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} pt={5}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">
                    <strong>Total Amount covered</strong>
                  </Typography>
                  <Typography variant="h5" align="center">
                    € 7 995 667
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} pt={5}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">
                    <strong>Most popular creditor</strong>
                  </Typography>
                  <Typography variant="h5" align="center">
                    BigBank
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} pt={5}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center">
                    <strong>Most Popular credited item</strong>
                  </Typography>
                  <Typography variant="h5" align="center">
                    House, Real Estate
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default CoveredLoans;
