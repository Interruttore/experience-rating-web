import "../styles/navbar.css"
import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="topnav">
            <Link to="/" className={window.location.pathname === "/" ? 'active' : null}>Home</Link>
            <Link to="/search" className={window.location.pathname === "/search" ? 'active' : null}>Search</Link>
            <Link to="/about" className={window.location.pathname === "/about" ? 'active' : null}>About</Link>
        </div>
    )
}

export default Navbar;
