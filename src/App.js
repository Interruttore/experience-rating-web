import "./styles/reset.css"
import "./styles/main.css"
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
