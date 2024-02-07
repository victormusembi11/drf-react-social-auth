import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Nav from "./components/nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="541785145737-n1a0n0e914ipg2ug6oliop4ro19f78q2.apps.googleusercontent.com">
      <Nav />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
