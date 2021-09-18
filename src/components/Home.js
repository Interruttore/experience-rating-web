import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<p>HOME</p>
			<Link to="/collection">Collection</Link>
		</div>
	);
};

export default Home;
