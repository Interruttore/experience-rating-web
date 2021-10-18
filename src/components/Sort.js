function Sort(itemArray, sortOption) {
	console.log(sortOption);
	console.log(itemArray);
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
}

export default Sort;
