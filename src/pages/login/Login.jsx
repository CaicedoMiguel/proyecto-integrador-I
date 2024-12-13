import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/use-auth-store";
import { FaRegUserCircle, FaLock, FaGoogle } from "react-icons/fa";
import userDAO from "../../daos/userDAO";
import "./Login.css";

const Login = () => {
  const { user, error, loginGoogleWithPopUp, observeAuthState, clearError } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  useEffect(() => {
    const handleUser = async () => {
      if (user) {
        const newUser = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        };
        const result = await userDAO.createUser(newUser, user.uid);
        if (result.success) {
          navigate("/home");
        } else {
          console.error(result.error);
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
    <div className="login-container" style={{backgroundImage: "url('/src/assets/background.jpg')"}}>
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        {error && (
          <div className="error-message">
            {error}
            <button onClick={clearError} className="clear-error-btn">
              ×
            </button>
          </div>
        )}
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <div className="input-group">
            <FaRegUserCircle className="input-icon" />
            <input type="text" placeholder="Username" required disabled />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required disabled />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" disabled /> Remember me
            </label>
            <a href="#forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-btn" disabled>
            Login
          </button>
          <div className="divider">or</div>
          <button type="button" onClick={handleLogin} className="google-btn">
            <FaGoogle className="google-icon" />
            Sign in with Google
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="#signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

