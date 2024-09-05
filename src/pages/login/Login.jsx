import React, { useEffect, useState, useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const { user, loading, error, loginGoogleWithPopup, observeAuthState, clearError } = useAuthStore();
  const navigate = useNavigate();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    document.body.classList.add("login-background");
    const unsubscribe = observeAuthState();
    setIsInitialized(true);
    
    return () => {
      document.body.classList.remove("login-background");
      unsubscribe();
    };
  }, [observeAuthState]);

  useEffect(() => {
    if (user && isInitialized) {
      navigate("/Quiz");
    }
  }, [user, navigate, isInitialized]);

  const onHandlerLogin = useCallback(() => {
    loginGoogleWithPopup();
  }, [loginGoogleWithPopup]);

  if (!isInitialized || loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return null;
  }

  return (
    <div className="wrapper">
      {error && (
        <div className="error-message">
          {error}
          <button onClick={clearError}>Clear error</button>
        </div>
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaRegUserCircle className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#"> Forgot password </a>
        </div>

        <button type="submit">login</button>

        <button type="button" onClick={onHandlerLogin}>sign in with google account</button>

        <div className="register-link">
          <p>
            Don't have an account? <a href="#"> Register </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;