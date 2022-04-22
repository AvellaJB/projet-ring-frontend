import React from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Navbar({ connected, setConnected }) {
  function disconnect() {
    localStorage.removeItem("connected");
    setConnected(false);
  }

  return (
    <div className="navbar">
      <p className="logo">RING PROJECT</p>
      <div className="linksNavbar">
        <Link to="/" className="linkNavbar">
          Accueil
        </Link>
        {connected === true && (
          <Link to="/library" className="linkNavbar">
            Ma Bibliothèque
          </Link>
        )}
        {connected === true && (
          <Link to="/ajout" className="linkNavbar">
            Ajout
          </Link>
        )}
        {connected === false && (
          <Link to="/login" className="linkNavbar">
            Se connecter
          </Link>
        )}
        {connected === true && (
          <a onClick={disconnect} className="linkNavbar">
            Se déconnecter
          </a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
