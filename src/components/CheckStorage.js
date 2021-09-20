/* eslint-disable no-case-declarations */
const CheckStorage = function (typeOfSearch, itemToCheck) {
	switch (typeOfSearch) {
	case "movie":
		let movies = [];
		const moviesJSON = localStorage.getItem("movies");

		if (moviesJSON !== null) {
			if (moviesJSON.length !== 0) {
				movies = JSON.parse(moviesJSON);
				if (
					movies.find((element) => element.id === itemToCheck.id) !==
						undefined
				) {
					return true;
				}
			}
		}
		return false;

	case "tv":
		let tvs = [];
		const tvsJSON = localStorage.getItem("tvs");

		if (tvsJSON !== null) {
			if (tvsJSON.length !== 0) {
				tvs = JSON.parse(tvsJSON);
				if (
					tvs.find((element) => element.id === itemToCheck.id) !== undefined
				) {
					return true;
				}
			}
		}
		return false;

	default:
		break;
	}
};

export default CheckStorage;
