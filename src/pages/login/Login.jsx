import { useEffect, useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaLock } from "react-icons/fa";
import "./Login.css";
import userDAO from "../../daos/userDAO";

const Login = () => {
  const { user, error, loginGoogleWithPopUp, observeAuthState, clearError } = useAuthStore();
  const navigate = useNavigate();

  // Observa el estado de autenticación al montar el componente
  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  // Maneja la creación de usuario y la redirección tras el login
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
          // Redirige al usuario a la página "home" después de iniciar sesión
          navigate("/home");
        } else {
          console.log(result.error);
        }
      }
    };
    handleUser();
  }, [user, navigate]);

  // Maneja la acción de login con Google
  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  // Si el usuario ya está autenticado, no mostrar el formulario de login
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
      <form onSubmit={(e) => e.preventDefault()} className="login-form">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required disabled />
          <FaRegUserCircle className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required disabled />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" disabled /> Remember me
          </label>
          <a href="#"> Forgot password </a>
        </div>

        <button type="submit" disabled>Login</button>

        <button type="button" onClick={handleLogin} className="google-login-button">
          Sign in with Google Account
        </button>

        <div className="register-link">
          <p>Don't have an account? <a href="#"> Register </a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
