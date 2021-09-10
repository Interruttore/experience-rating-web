import React from 'react';
import "../styles/navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {

  
    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Navbar;
