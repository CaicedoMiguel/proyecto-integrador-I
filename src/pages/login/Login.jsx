import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { FaGoogle } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";

import userDAO from "../../daos/userDAO";
import "./Login.css";

const Login = () => {
  const { user, error, loginGoogleWithPopUp, observeAuthState, clearError } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = observeAuthState();
    return () => unsubscribe();
  }, [observeAuthState]);

  useEffect(() => {
    const handleUser = async () => {
      if (user) {
        try {
          const existingUser = await userDAO.getUserById(user.uid);
          if (existingUser.success && existingUser.data) {
            navigate("/home");
          } else {
            const newUser = {
              email: user.email,
              name: user.displayName,
              photo: user.photoURL,
            };
            const result = await userDAO.createUser(newUser, user.uid);
            if (result.success) {
              navigate("/home");
            } else {
              throw new Error("Failed to create user");
            }
          }
        } catch (error) {
          console.error("Error handling user:", error);
        }
      }
    };

    handleUser();
  }, [user, navigate]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  if (user) {
    return null;
  }

  return (
    <div className="login-container" style={{ backgroundImage: "url('/assets/background.jpg')" }}>
      <div className="login-card">
        <FaLeaf className="leaf-icon" style={{ fontSize: '48px', color: '#4CAF50', marginBottom: '20px' }} />
        <h1 className="login-title">Bienvenido a Tierra Santa</h1>
        {error && (
          <div className="error-message">
            {error}
            <button onClick={clearError} className="clear-error-btn" aria-label="Clear error">
              ×
            </button>
          </div>
        )}
        <button onClick={handleLogin} className="google-btn">
          <FaGoogle className="google-icon" />
          Sign in with Google
        </button>
        <p className="login-message">
        Únete a nuestra comunidad y haz una diferencia para el planeta.
        </p>
      </div>
    </div>
  );
};

export default Login;

