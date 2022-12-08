import React from "react";
import { Button } from "@mui/material";
import { UserContext } from "../Context/userContext";

const Login = () => {
  const { logInWithGoogle, logInWithEmailAndPassword } =
    React.useContext(UserContext);

  const handleLogin = () => {
    logInWithEmailAndPassword("eima.blazevicius@gmail.com", "Temonas789.");
  };
  return (
    <>
      <Button onClick={logInWithGoogle}>Google Login</Button>
      <Button onClick={handleLogin}>LoginWithUserAndPW</Button>
    </>
  );
};

export default Login;
