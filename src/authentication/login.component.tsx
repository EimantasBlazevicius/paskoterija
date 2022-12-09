import React from "react";
import { Button, Box, Stack, TextField, Typography } from "@mui/material";
import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signInWithGoogle, logInWithEmailAndPassword } =
    React.useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    logInWithEmailAndPassword(email, password);
    navigate("/");
  };

  return (
    <Box bgcolor="#f5daa3" height="90vh">
      <Stack pt={5}>
        <Typography variant="h4" color="initial" margin="auto">
          Welcome back!
        </Typography>
      </Stack>
      <Stack
        height="60vh"
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <TextField
          style={{ maxWidth: "25rem", minWidth: "20rem" }}
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          style={{ maxWidth: "25rem", minWidth: "20rem" }}
          id="pw"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          style={{ maxWidth: "25rem", minWidth: "20rem" }}
          variant="contained"
          onClick={handleLogin}
        >
          Submit
        </Button>
        <Button startIcon={<GoogleIcon />} onClick={signInWithGoogle}>
          Google Login
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
