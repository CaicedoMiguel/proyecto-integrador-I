import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import React from "react";
import "./Login.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import userDAO from "../../daos/userDAO";


const Login = () => {
    const {user,loginGoogleWithPopup,observeAuthState, } = useAuthStore();

    const navigate = useNavigate();
    useEffect(() => {
        observeAuthState();
    }
    ,[observeAuthState]);

    // useEffect(() => {
    //   if (user) {
    //     const newUser = {
    //       email: user.email,
    //       name: user.displayName,
    //       photo: user.photoURL,
    //     };
    //     userDAO.createUser(newUser);
    //     navigate("/Quiz");
    //   }
    // }, [user, navigate]);


    const onHandlerLogin = useCallback (() => {
        loginGoogleWithPopup()
    },[loginGoogleWithPopup]);


  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required/>
          <FaRegUserCircle className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required/>
          <FaLock className='icon' />
        </div>

        <div className="remember-forgot">
          <label> <input  type="checkbox" /> Remember me </label>
          <a href="#"> Forgot password </a>
        </div>

        <button type="submit">login </button>

        <button type="submit" onClick={onHandlerLogin}>sign in with google account </button>

        <div className="register-link" >
          <p>Don't have an account? <a href="#"> Register </a> </p>
        </div>    
        </form> 
    </div>
  );
};

export default Login
