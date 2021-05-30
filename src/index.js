import { Router } from "preact-router";
import Home from "./routes/Home";
import Nav from "./components/Nav";
import "@fortawesome/fontawesome-free/js/all.js";
import "./style";

const App = () => (
  <div id="app">
    <Nav />
    <Router>
      <Home path="/" />
    </Router>
  </div>
);

export default App;
