/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
// import Login from "./pages/login/Login.jsx";
// import Modelado3D from "./pages/modelado3D/Modelado3D.jsx";
// import useAuthStore from "./stores/use-auth-store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useAuthStore();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/Modelado3D",
//     element: (
//       <ProtectedRoute>
//         <Modelado3D />
//       </ProtectedRoute>
//     ),
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
