import React from "react";
import { Stack, TextField, Typography, Box, Button } from "@mui/material";
import { saveUser } from "../firestoreConfig";

const Register = () => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [data, setData] = React.useState<string>("");
  const [importantData, setImportantData] = React.useState<string>("");

  const handleSubmit = () => {
    saveUser(firstName, lastName, data, importantData);
  };

  return (
    <Box bgcolor="#f5daa3" height="90vh">
      <Stack pt={5}>
        <Typography variant="h4" color="initial" margin="auto">
          Register your first loan
        </Typography>
      </Stack>
      <Stack
        my={10}
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Stack direction="row" spacing={4}>
          <TextField
            id="firstName"
            label="First Name"
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="standard"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Stack>

        <Stack direction="row" spacing={4}>
          <TextField
            id="data"
            label="Data"
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <TextField
            id="importantData"
            label="Important Data"
            variant="standard"
            value={importantData}
            onChange={(e) => setImportantData(e.target.value)}
          />
        </Stack>
        <Stack direction="row" pt={3} spacing={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Register;
