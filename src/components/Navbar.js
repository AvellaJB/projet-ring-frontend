import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ImBooks } from "react-icons/im";

function Navbar({ connected, setConnected }) {
  /* Création de la fonction disconnect qui est lancée lorsque l'on appuie sur le bouton. */
  const navigate = useNavigate();

  function disconnect() {
    navigate("/");
    localStorage.removeItem("jwt");
    setConnected(false);
  }

  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <div className="logo-group">
          <div className="logo-name">RING PROJECT</div>
          <div className="logo-sv">
            {" "}
            <ImBooks />
          </div>
        </div>
      </Link>
      <div className="linksNavbar">
        <Link to="/" className="linkNavbar">
          Accueil
        </Link>
        {/* Affichage dynamique des élément de Nav en fonction de si on est connecté ou pas. */}
        {connected === true && (
          <Link to="/library" className="linkNavbar">
            Ma Bibliothèque
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
