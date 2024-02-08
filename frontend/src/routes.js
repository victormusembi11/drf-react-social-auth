import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import App from "./pages/home";
import Login from "./pages/login";
import AuthCheck from "./pages/auth-check";
import Dashboard from "./pages/dashboard";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  }, [token, navigate]);

  return <Outlet />;
};

const routesForPublic = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/auth-check",
    element: <AuthCheck />,
  },
];

const routesForAuthenticatedOnly = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export const router = createBrowserRouter([
  ...routesForPublic,
  ...routesForAuthenticatedOnly,
]);
