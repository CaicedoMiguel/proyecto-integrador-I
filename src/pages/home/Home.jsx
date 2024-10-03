// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../login/Login";

const Home = ()=> {    
    return (
        <>
        <div>
            <Navbar />
        </div>
        <div>
            <Login />
        </div>
        </>
    )
};

export default Home;