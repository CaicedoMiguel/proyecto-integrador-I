import { useEffect, useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "./Login.css";
import userDAO from "../../daos/userDAO";

const Login = () => {
  const { user, error, loginGoogleWithPopUp, observeAuthState, clearError } = useAuthStore();
  const navigate = useNavigate();

  // useEffect for observing authentication state and setting the background
  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      userDAO.createUser(newUser);
      navigate("/Modelado3D");
    }
  }, [user, navigate]);

  // useEffect to navigate to the home page when a user logs in
  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  // Handles Google login action using useCallback for memoization
  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  // If the user is already logged in, return null to avoid showing the login form
  if (user) {
    return null;
  }

  // The main JSX layout for the login form
  return (
    <>
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

        <button type="button" onClick={handleLogin}>sign in with google account</button>

        <div className="register-link">
          <p> Don t have an account? <a href="#"> Register </a></p>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;