/* eslint-disable no-case-declarations */
const Add = function (e, setIsPresent, typeOfSearch, itemToAdd) {
	e.preventDefault();

	const tDate = new Date();
	itemToAdd["dateAdded"] = tDate.toLocaleDateString();
	console.log("willy", itemToAdd);
	switch (typeOfSearch) {
	case "movie":
		let movies = [];
		const moviesJSON = localStorage.getItem("movies");

		if (moviesJSON !== null) {
			if (moviesJSON.length !== 0) {
				movies = JSON.parse(moviesJSON);
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
		setIsPresent(true);
		break;

	case "tv":
		let tvs = [];
		const tvsJSON = localStorage.getItem("tvs");

		if (tvsJSON !== null) {
			if (tvsJSON.length !== 0) {
				tvs = JSON.parse(tvsJSON);
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
		setIsPresent(true);
		localStorage.setItem("tvs", JSON.stringify(tvs));
		break;

	default:
		break;
	}
};

export default Add;
