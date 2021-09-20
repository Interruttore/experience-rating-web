/* eslint-disable no-case-declarations */
const Add = function (e, setIsPresent, typeOfSearch, itemToAdd) {
	e.preventDefault();

	// console.log(typeOfSearch, originalTitle, releaseDate, genresName, overview, e.target.dateForm.value, e.target.voteForm.value);
	switch (typeOfSearch) {
	case "movie":
		let movies = [];
		const moviesJSON = localStorage.getItem("movies");

		if (moviesJSON !== null) {
			if (moviesJSON.length !== 0) {
				movies = JSON.parse(moviesJSON);
				console.log(movies);
				if (
					movies.find((element) => element.id === itemToAdd.id) !== undefined
				) {
					console.log("Movie already present");
				} else {
					movies.push(itemToAdd);
				}
			}
		} else {
			movies.push(itemToAdd);
		}
		localStorage.setItem("movies", JSON.stringify(movies));
		console.log("Is function see:", setIsPresent);
		//setIsPresent(true);
		break;

	case "tv":
		let tvs = [];
		const tvsJSON = localStorage.getItem("tvs");

		if (tvsJSON !== null) {
			if (tvsJSON.length !== 0) {
				tvs = JSON.parse(tvsJSON);
				console.log(tvs);
				if (
					tvs.find((element) => element.id === itemToAdd.id) !== undefined
				) {
					console.log("TV Show already present");
				} else {
					tvs.push(itemToAdd);
				}
			}
		} else {
			tvs.push(itemToAdd);
		}
		//setIsPresent(true);
		localStorage.setItem("tvs", JSON.stringify(tvs));
		break;

	default:
		break;
	}
};

export default Add;
