import React, { useState } from "react";
import Add from "./Add";
import Remove from "./Remove";
import CheckStorage from "./CheckStorage";
import PropTypes from "prop-types";
import "../styles/item.css";
import "../styles/buttons.css";

const Item = ({ item, typeOfSearch }) => {
	let [isPresent, setIsPresent] = useState(CheckStorage(typeOfSearch, item));

	if (typeOfSearch === "movie" || typeOfSearch === "tv") {
		let posterPath;
		if (item.posterPath !== null) {
			posterPath = "https://image.tmdb.org/t/p/original/" + item.posterPath;
		} else {
			posterPath = "/missing_poster.png";
		}

		// console.log(item);
		if (isPresent) {
			console.log(item.originalTitle, "Present in collection");
			return (
				<div className="item--container">
					<img
						className="poster poster-border"
						alt="poster"
						src={posterPath}
					></img>
					<div className="inner-container">
						<h2 className="title">
							{item.originalTitle} (
							{item.releaseDate !== undefined
								? item.releaseDate.slice(0, 4)
								: "No Year "}
							)
						</h2>
						<span className="releaseDate">
							Release date: {item.releaseDate}
						</span>
						<span className="genres">{item.genresName.join(", ")}</span>
						<p className="overview">{item.overview}</p>
						<p className="vote">{item.vote}</p>
						<p className="dateWatched">{item.dateWatched}</p>

						<form
							className="form"
							onSubmit={(e) =>
								Remove(e, (setIsPresent = { setIsPresent }), typeOfSearch, {
									id: item.id,
									originalTitle: item.originalTitle,
									releaseDate: item.releaseDate,
									genresName: item.genresName,
									overview: item.overview,
									posterPath: item.posterPath,
								})
							}
						>
							<div className="form-input">
								<button type="submit" className="remove-button bn1">
									<i className="fas fa-minus-square"></i> Remove from collection
								</button>
							</div>
						</form>
					</div>
				</div>
			);
		} else {
			return (
				<div className="item--container">
					<img
						className="poster poster-border"
						alt="poster"
						src={posterPath}
					></img>
					<div className="inner-container">
						<h2 className="title">
							{item.originalTitle} (
							{item.releaseDate !== undefined
								? item.releaseDate.slice(0, 4)
								: "No Year"}
							)
						</h2>
						<span className="date">Release date: {item.releaseDate}</span>
						<span className="genres">{item.genresName.join(", ")}</span>
						<p className="overview">{item.overview}</p>

						<form
							className="form"
							onSubmit={(e) =>
								Add(e, (setIsPresent = { setIsPresent }), typeOfSearch, {
									id: item.id,
									originalTitle: item.originalTitle,
									releaseDate: item.releaseDate,
									genresName: item.genresName,
									overview: item.overview,
									posterPath: item.posterPath,
									dateWatched: e.target.dateForm.value,
									vote: e.target.voteForm.value,
								})
							}
						>
							<div className="form-input">
								<div className="inner-form-input tooltip">
									<label htmlFor="voteForm">Vote</label>
									<span className="tooltip-text">Vote goes from 0 to 10</span>
									<input
										className="voteForm"
										type="number"
										id="voteForm"
										name="vote"
										min="0"
										max="10"
										step="0.5"
										defaultValue="0"
									></input>
								</div>
								<div className="inner-form-input tooltip">
									<label htmlFor="dateForm">Date Watched</label>
									<span className="tooltip-text">Specify the date</span>
									<input
										className="dateForm"
										type="date"
										id="dateForm"
										name="dateForm"
									></input>
								</div>
								<button type="submit" className="submit-button bn1">
									<i className="far fa-plus-square"></i> Add to collection
								</button>
							</div>
						</form>
					</div>
				</div>
			);
		}
	}

	if (typeOfSearch === "book") {
		return (
			<div className="item--container">
				<img
					className="poster poster-border"
					alt="cover"
					src={"http://covers.openlibrary.org/b/isbn/" + item.isbn + "-M.jpg"}
					onError={(e) => {
						e.target = null;
						e.target.src = "../../public/missing_cover.png";
					}}
				></img>
				<div className="inner-container">
					<h2 className="title">
						{item.title} ({item.firstPublishYear})
					</h2>

					<form
						className="form"
						onSubmit={(e) =>
							Add(e, typeOfSearch, {
								title: item.title,
								firstPublishYear: item.firstPublishYear,
							})
						}
					>
						<div className="form-input">
							<div className="inner-form-input tooltip">
								<label htmlFor="voteForm">Vote</label>
								<span className="tooltip-text">Vote goes from 0 to 10</span>
								<input
									className="voteForm"
									type="number"
									id="voteForm"
									name="vote"
									min="0"
									max="10"
									step="0.5"
									defaultValue="0"
								></input>
							</div>
							<div className="inner-form-input tooltip">
								<label htmlFor="voteForm">Date Read</label>
								<span className="tooltip-text">Specify the date</span>
								<input
									className="dateForm"
									type="date"
									id="dateForm"
									name="dateForm"
								></input>
							</div>
							<button type="submit" className="submit-button bn1">
								<i className="far fa-plus-square"></i> Add to collection
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
};

Item.propTypes = {
	item: PropTypes.object,
	typeOfSearch: PropTypes.string,
};
export default Item;
