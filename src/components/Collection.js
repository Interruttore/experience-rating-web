/* eslint-disable no-case-declarations */
import React, { useState } from "react";
import CollectionNavbar from "./CollectionNavbar";
import Item from "./Item";
import "../styles/collection.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Collection = ({ type }) => {
	let itemArray = [];
	let nItems = 0;
	let [sortOption, setSortOption] = useState(
		localStorage.getItem("sortOption")
	);

	const sort = function (sortOption) {
		switch (sortOption) {
		case "tAZ":
			itemArray.sort(function (a, b) {
				let nameA = a.props.item.originalTitle.toUpperCase();
				let nameB = b.props.item.originalTitle.toUpperCase();
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			});
			break;

		case "tZA":
			itemArray.sort(function (a, b) {
				let nameA = a.props.item.originalTitle.toUpperCase();
				let nameB = b.props.item.originalTitle.toUpperCase();
				if (nameA < nameB) {
					return 1;
				}
				if (nameA > nameB) {
					return -1;
				}
				return 0;
			});
			break;

		case "rU":
			itemArray.sort(function (a, b) {
				let releaseDateA = a.props.item.releaseDate;
				let releaseDateB = b.props.item.releaseDate;
				if (releaseDateA < releaseDateB) {
					return 1;
				}
				if (releaseDateA > releaseDateB) {
					return -1;
				}
				return 0;
			});
			break;

		case "rD":
			itemArray.sort(function (a, b) {
				let releaseDateA = a.props.item.releaseDate;
				let releaseDateB = b.props.item.releaseDate;
				if (releaseDateA < releaseDateB) {
					return -1;
				}
				if (releaseDateA > releaseDateB) {
					return 1;
				}
				return 0;
			});
			break;

		case "dU":
			itemArray.sort(function (a, b) {
				let dateWatchedA = a.props.item.dateWatched;
				let dateWatchedB = b.props.item.dateWatched;
				if (dateWatchedA < dateWatchedB) {
					return 1;
				}
				if (dateWatchedA > dateWatchedB) {
					return -1;
				}
				return 0;
			});
			break;

		case "dD":
			itemArray.sort(function (a, b) {
				let dateWatchedA = a.props.item.dateWatched;
				let dateWatchedB = b.props.item.dateWatched;
				if (dateWatchedA < dateWatchedB) {
					return -1;
				}
				if (dateWatchedA > dateWatchedB) {
					return 1;
				}
				return 0;
			});
			break;

		case "aU":
			itemArray.sort(function (a, b) {
				let dateAddedA = a.props.item.dateAdded;
				let dateAddedB = b.props.item.dateAdded;
				if (dateAddedA < dateAddedB) {
					return 1;
				}
				if (dateAddedA > dateAddedB) {
					return -1;
				}
				return 0;
			});
			break;

		case "aD":
			itemArray.sort(function (a, b) {
				let dateAddedA = a.props.item.dateAdded;
				let dateAddedB = b.props.item.dateAdded;
				if (dateAddedA < dateAddedB) {
					return -1;
				}
				if (dateAddedA > dateAddedB) {
					return 1;
				}
				return 0;
			});
			break;

		case "vU":
			itemArray.sort(function (a, b) {
				let voteA = a.props.item.vote;
				let voteB = b.props.item.vote;
				if (voteA < voteB) {
					return 1;
				}
				if (voteA > voteB) {
					return -1;
				}
				return 0;
			});
			break;
		case "vD":
			itemArray.sort(function (a, b) {
				let voteA = a.props.item.vote;
				let voteB = b.props.item.vote;
				if (voteA < voteB) {
					return -1;
				}
				if (voteA > voteB) {
					return 1;
				}
				return 0;
			});
			break;

		default:
			break;
		}
	};

	switch (type) {
	case "movie":
		let moviesJSON = localStorage.getItem("movies");
		if (moviesJSON !== null) {
			if (moviesJSON.length !== 0) {
				let movies = JSON.parse(moviesJSON);
				itemArray = movies.map((item) => (
					<Item item={item} key={item.id} typeOfSearch={"movie"}></Item>
				));
				sort(sortOption);
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
		console.log("Setting sort option to:", sortOption);
		setSortOption(sortOption);
		localStorage.setItem("sortOption", sortOption);
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
					<optgroup label="Alfabetica">
						<option value="tAZ">A-Z</option>
						<option value="tZA">Z-A</option>
					</optgroup>

					<optgroup label="Release date">
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
