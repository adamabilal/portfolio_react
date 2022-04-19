import { Link} from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Bonjour,</p>
          <p>Je suis  Adama TRAORÉ</p>
          <p>étudiant en licence <br/>3 informatique.</p>
        </h1>
        <Link to="about">
          <button>Plus d'information</button>
        </Link>
      </div>
      <div className="person">
        <img
          src='profil.jpg'
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
