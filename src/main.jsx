/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Modelado3D from "./pages/modelado3D/Modelado3D.jsx";
import useAuthStore from "./stores/use-auth-store";


// eslint-disable-next-line react-refresh/only-export-components
const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Modelado3D",
    element: (
      <ProtectedRoute>
        <Modelado3D />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
