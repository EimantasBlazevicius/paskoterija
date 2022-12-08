import React from "react";
import { Stack, TextField, Typography, Box, Button } from "@mui/material";
import { UserContext } from "../Context/userContext";

const Register = () => {
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");

  const { registerWithEmailAndPassword } = React.useContext(UserContext);

  const handleSubmit = () => {
    if (password !== passwordRepeat) {
      console.log("Passwords do not match");
      return;
    }
    console.log(firstName + " " + lastName, email, password);
    registerWithEmailAndPassword(firstName + " " + lastName, email, password);
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
            id="pw"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="pw2"
            label="Repeat Password"
            variant="standard"
            type="password"
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </Stack>

        <Stack direction="row" spacing={4}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
