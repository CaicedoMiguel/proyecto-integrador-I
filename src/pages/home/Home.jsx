// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../login/Login";
import './Home.css';

const Home = ()=> {    
    return (
        <>
        <div>
            <Navbar />
        </div>
        <div className="componenteLogin">
            <Login />
        </div>
        </>
    )
};

export default Home;