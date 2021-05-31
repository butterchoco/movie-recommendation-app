import { Router } from "preact-router";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
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
      <MovieDetail path="/detail/:name" />
    </Router>
  </div>
);

export default App;
