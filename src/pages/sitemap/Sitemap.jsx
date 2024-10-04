// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import './Sitemap.css';
import { Link } from 'react-router-dom';

const Sitemap = ()=> {
    return (
        <>
        <div>
            <Navbar />
        </div>
        <main>
            <div className="contenedorSitemap">
                <h2>Site map</h2>
                <p>Home</p>
                <ul>
                    <li>
                    <Link to="#">Site home page</Link>
                    </li>
                </ul>
                <p>information about the environment</p>
                <ul>
                    <li>
                    <Link to="#">Loss of biodiversity</Link>
                    </li>
                    <li>
                    <Link to="#">Deforestation</Link>
                    </li>
                </ul>
                <p>Interactive learning</p>
                <ul>
                    <li>
                    <Link to="#">Activity on the loss of biodiversity</Link>
                    </li>
                    <li>
                    <Link to="#">Activity on deforestation</Link>
                    </li>
                </ul>
                <p>About</p>
                <ul>
                    <li>
                    <Link to="#">About the creation of the page</Link>
                    </li>
                    <li>
                    <Link to="#">Contact</Link>
                    </li>
                </ul>
            </div>
        </main>
        </>
)
};

export default Sitemap;