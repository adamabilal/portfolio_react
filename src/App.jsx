import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./components/Accueil";
import Apropos from "./components/Apropos";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Formations from "./components/Formations";
import Experiences from "./components/Experiences";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/about" component={Apropos} />
          <Route exact path="/Competences" component={Competences} />
          <Route exact path="/projets" component={Projets} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/formations" component={Formations} />
          <Route exact path="/experiences" component={Experiences} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
