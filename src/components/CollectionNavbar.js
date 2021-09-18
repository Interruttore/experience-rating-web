import React from "react";
import { Link } from "react-router-dom";
import "../styles/collectionNavbar.css";
import PropTypes from "prop-types";

function CollectionNavbar({ displaying }) {
	return (
		<div
			className={
				displaying
					? "collection-navbar--container-displaying"
					: "collection-navbar--container "
			}
		>
			<Link to="/collection/movies" className="movies">
				<span style={displaying ? { display: "none" } : { display: "block" }}>
					Movies
				</span>
				<i className="fas fa-film"></i>
			</Link>
			<Link to="/collection/tvs" className="tvs">
				<span style={displaying ? { display: "none" } : { display: "block" }}>
					TV Shows
				</span>
				<i className="fas fa-tv"></i>
			</Link>
			<Link to="/collection/books" className="books">
				<span style={displaying ? { display: "none" } : { display: "block" }}>
					Books
				</span>
				<i className="fas fa-book"></i>
			</Link>
			<Link to="/collection/games" className="games">
				<span style={displaying ? { display: "none" } : { display: "block" }}>
					Games
				</span>
				<i className="fas fa-gamepad"></i>
			</Link>
		</div>
	);
}

CollectionNavbar.propTypes = {
	displaying: PropTypes.bool,
};
export default CollectionNavbar;
