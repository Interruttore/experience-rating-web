/* eslint-disable no-case-declarations */
import React from "react";
import CollectionNavbar from "./CollectionNavbar";
import Item from "./Item";
import "../styles/collection.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Collection = ({ type }) => {
	let itemArray = [];
	let nItems = 0;

	switch (type) {
	case "movie":
		let moviesJSON = localStorage.getItem("movies");
		if (moviesJSON !== null) {
			if (moviesJSON.length !== 0) {
				let movies = JSON.parse(moviesJSON);
				itemArray = movies.map((item) => (
					<Item item={item} key={item.id} typeOfSearch={"movie"}></Item>
				));
				nItems = moviesJSON.length;
			}
		}
		break;

	case "tv":
		let tvsJSON = localStorage.getItem("tvs");
		if (tvsJSON !== null) {
			if (tvsJSON.length !== 0) {
				let tvs = JSON.parse(tvsJSON);
				itemArray = tvs.map((item) => (
					<Item item={item} key={item.id} typeOfSearch={"tv"}></Item>
				));
				nItems = tvsJSON.length;
			}
		}
		break;

	default:
		break;
	}

	return (
		<div
			className={
				type !== null
					? "collection--container-displaying"
					: "collection--container"
			}
		>
			<CollectionNavbar displaying={type !== null}></CollectionNavbar>
			<div
				className="no-items"
				style={
					nItems > 0 || type === null
						? { display: "none" }
						: { display: "flex" }
				}
			>
				<h3>No items in this collection</h3>
				<p>
					Go add some <Link to="/search">now!</Link>
				</p>
			</div>
			<ul style={nItems > 0 ? { display: "block" } : { display: "none" }}>
				{itemArray}
			</ul>
		</div>
	);
};
Collection.propTypes = {
	type: PropTypes.string,
};
export default Collection;
