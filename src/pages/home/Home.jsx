// eslint-disable-next-line no-unused-vars
import React from "react";
import './Home.css';
import Navbar from "../../components/Navbar";
import ModelViewer from "../../components/ModelViewer";

const Home = () => {
    return (
        <>
        <div className="container">
            <div className="navbar">
            <Navbar />
            </div>
            <div className="modelo3D">
            <ModelViewer />
            </div>
            <div className="introducion">
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe culpa autem placeat eveniet odit voluptate velit animi, architecto, eius a quisquam. Explicabo consequuntur in, molestiae asperiores fuga ea? Similique.</p>
            </div>
        </div>
        </>
    );
};

export default Home;
