/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Cubo from "./pages/cubo/Cubo.jsx";
import useAuthStore from "./stores/use-auth-store";

// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Cubo",
    element: (
      <ProtectedRoute>
        <Cubo />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
