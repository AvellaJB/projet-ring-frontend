import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <p className="logo">RING PROJECT</p>
      <div className="linksNavbar">
        <Link to="/" className="linkNavbar">
          Accueil
        </Link>
        <Link to="/library" className="linkNavbar">
          Ma Bibliothèque
        </Link>
        <Link to="/ajout" className="linkNavbar">
          Ajout
        </Link>
        <Link to="/profil" className="linkNavbar">
          Mon profil
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
