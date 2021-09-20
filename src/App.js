import "./styles/reset.css";
import "./styles/main.css";
import React from "react";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Collection from "./components/Collection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/search">
						<Navbar />
						<SearchPage />
					</Route>

					<Route path="/about">
						<Navbar />
						<About />
					</Route>

					<Route path="/collection/movies">
						<Navbar />
						<Collection type={"movie"} />
					</Route>

					<Route path="/collection/tvs">
						<Navbar />
						<Collection type={"tv"} />
					</Route>

					<Route path="/collection/books">
						<Navbar />
						<Collection type={"book"} />
					</Route>

					<Route path="/collection/games">
						<Navbar />
						<Collection type={"game"} />
					</Route>

					<Route path="/collection">
						<Navbar />
						<Collection type={null} />
					</Route>

					<Route path="/">
						<Navbar />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
