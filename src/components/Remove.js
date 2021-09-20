/* eslint-disable no-case-declarations */
const Remove = function (e, setIsPresent, typeOfSearch, itemToRemove) {
	e.preventDefault();

	// console.log(typeOfSearch, originalTitle, releaseDate, genresName, overview, e.target.dateForm.value, e.target.voteForm.value);
	switch (typeOfSearch) {
	case "movie":
		let movies = [];
		const moviesJSON = localStorage.getItem("movies");

		if (moviesJSON !== null) {
			if (moviesJSON.length !== 0) {
				movies = JSON.parse(moviesJSON);
				const index = movies.findIndex(
					(element) => element.id === itemToRemove.id
				);
				if (index !== -1) {
					movies.splice(index, 1);
					if (movies.length === 0) {
						localStorage.removeItem("movies");
					} else {
						localStorage.setItem("movies", JSON.stringify(movies));
					}
				} else {
					console.log("Movie not in collection");
				}
			}
		} else {
			console.log("No movies present in the collection");
		}
		//setIsPresent(false);
		break;

	case "tv":
		let tvs = [];
		const tvsJSON = localStorage.getItem("tvs");

		if (tvsJSON !== null) {
			if (tvsJSON.length !== 0) {
				tvs = JSON.parse(tvsJSON);
				const index = tvs.findIndex(
					(element) => element.id === itemToRemove.id
				);
				if (index !== -1) {
					tvs.splice(index, 1);
					if (tvs.length === 0) {
						localStorage.removeItem("tvs");
					} else {
						localStorage.setItem("tvs", JSON.stringify(tvs));
					}
				} else {
					console.log("Tv Show not in collection");
				}
			}
		} else {
			console.log("No TV shows present in the collection");
		}
		//setIsPresent(false);

		break;

	default:
		break;
	}
};

export default Remove;
