import { Router } from "preact-router";
import Home from "./routes/Home";
import Welcome from "./routes/Welcome";
import MovieDetail from "./routes/MovieDetail";
import MovieList from "./routes/MovieList";
import Nav from "./components/Nav";
import "@fortawesome/fontawesome-free/js/all.js";
import "./style";

String.prototype.toCapitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const App = () => (
  <div id="app">
    <div>
      <Nav />
    </div>
    <Router>
      <Home path="/" />
      <Welcome path="/welcome" />
      <MovieDetail path="/detail/:name" />
      <MovieList path="/movies/:name" />
    </Router>
  </div>
);

export default App;
