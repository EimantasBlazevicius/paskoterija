import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import Login from "./authentication/login.component";
import Register from "./authentication/register.component";
import Results from "./routes/Results";
import Loans from "./routes/Loans";
import Tickets from "./routes/Tickets";
import Statistics from "./routes/Statistics";
import CoveredLoans from "./routes/CoveredLoans";
import Team from "./routes/Team";
import About from "./routes/About";
import Legal from "./routes/Legal";
import Contacts from "./routes/Contacts";
import Profile from "./routes/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/results",
        element: <Results />,
      },
      {
        path: "/loans",
        element: <Loans />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/Statistics",
        element: <Statistics />,
      },
      {
        path: "/covered-loans",
        element: <CoveredLoans />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
