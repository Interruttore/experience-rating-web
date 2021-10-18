import "../styles/navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="topnav">
			<img className="logo" src="../logoWhiteBorder.svg"></img>
			<Link
				to="/"
				className={window.location.pathname === "/" ? "active" : null}
			>
				Home
			</Link>
			<Link
				to="/search"
				className={window.location.pathname === "/search" ? "active" : null}
			>
				Search
			</Link>
			<Link
				to="/collection"
				className={window.location.pathname === "/collection" ? "active" : null}
			>
				Collection
			</Link>
			<Link
				to="/about"
				className={window.location.pathname === "/about" ? "active" : null}
			>
				About
			</Link>
		</div>
	);
};

export default Navbar;
