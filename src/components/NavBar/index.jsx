import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="logo.png"
              alt="brand"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src="logo.png"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="logo.png"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#0000FF" }}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#0000FF" }}
              >
                À Propos
              </Link>
            </li>
            <li>
            <Link
                to="/formations"
                onClick={handleClose}
                style={{ color: location.pathname === "/formations" && "#0000FF" }}
              >
                Formations
              </Link>
              </li>
            <li>
              <Link
                to="/competences"
                onClick={handleClose}
                style={{ color: location.pathname === "/competences" && "#0000FF" }}
              >
                Compétences
              </Link>
            </li>
            <li>
              <Link
                to="/projets"
                onClick={handleClose}
                style={{ color: location.pathname === "/projets" && "#0000FF" }}
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                to="/experiences"
                onClick={handleClose}
                style={{ color: location.pathname === "/experiences" && "#0000FF" }}
              >
                Expériences
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#0000FF" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
