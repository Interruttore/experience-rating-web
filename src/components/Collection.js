/* eslint-disable no-case-declarations */
import React, { useState } from "react";
import CollectionNavbar from "./CollectionNavbar";
import Item from "./Item";
import "../styles/collection.css";
import Sort from "./Sort";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Collection = ({ type }) => {
	let itemArray = [];
	let nItems = 0;
	let [sortOption, setSortOption] = useState(
		localStorage.getItem("sortOption")
	);

	switch (type) {
	case "movie":
		let moviesJSON = localStorage.getItem("movies");
		if (moviesJSON !== null) {
			if (moviesJSON.length !== 0) {
				let movies = JSON.parse(moviesJSON);
				itemArray = movies.map((item) => (
					<Item item={item} key={item.id} typeOfSearch={"movie"}></Item>
				));
				Sort(itemArray, sortOption);
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

	const localSortOption = function (sortOption) {
		setSortOption(sortOption);
	};

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
				<select
					id="sortOption"
					onChange={(e) => {
						localSortOption(e.target.value);
					}}
					value={sortOption}
				>
					<optgroup label="Alphabetically">
						<option value="tAZ">A-Z</option>
						<option value="tZA">Z-A</option>
					</optgroup>

					<optgroup label="Release Date">
						<option value="rU">Date Up</option>
						<option value="rD">Date Down</option>
					</optgroup>

					<optgroup label="Watched Date">
						<option value="dU">Date Up</option>
						<option value="dD">Date Down</option>
					</optgroup>

					<optgroup label="Date Added">
						<option value="aU">Added Up</option>
						<option value="aD">Added Down</option>
					</optgroup>
					<optgroup label="Vote">
						<option value="vU">Up</option>
						<option value="vD">Down</option>
					</optgroup>
				</select>
				{itemArray}
			</ul>
		</div>
	);
};
Collection.propTypes = {
	type: PropTypes.string,
};
export default Collection;
