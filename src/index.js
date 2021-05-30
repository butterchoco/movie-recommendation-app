import { Router } from "preact-router";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import "@fortawesome/fontawesome-free/js/all.js";
import "./style";

String.prototype.toCapitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const App = () => (
  <div id="app">
    <Nav />
    <Router>
      <Home path="/" />
    </Router>
  </div>
);

export default App;
