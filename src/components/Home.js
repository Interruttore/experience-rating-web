import React from "react";
import { Link } from "react-router-dom";
import SearchPage from "./SearchPage";

import "../styles/home.css";

const Home = () => {
	return (
		<div className="home--container">
			<h1>Experience Rating</h1>
			<p>
				Experience Rating is a website where you can collect movies, tv shows
				that you have seen or books that you have read and rate them.
			</p>
			<p>
				If you already have added some items in a collection you can see them by
				going to the <Link to="/collection">Collection page</Link>
			</p>
			<p>
				Otherwise you can start add something by going to the{" "}
				<Link to="/search">Search page</Link>
			</p>
			<p className="searchP">
				Alternatively you can start seaching right down here!
			</p>
			<SearchPage></SearchPage>
		</div>
	);
};

export default Home;
