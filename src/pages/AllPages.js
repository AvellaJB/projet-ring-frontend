import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserLibrary from "./UserLibrary";
import Ajout from "./Ajout";
import Home from "./Home";
import Connexion from "./Connexion";
import Navbar from "../components/Navbar";

function AllPages() {
  /* Pour pouvoir indiquer à nos différents composants que notre client est connecté
  ou non nous avons remontré le useState à un niveau haut. 
  Une fois présent nous pouvons envoyer le connected dans les différents composants qui ont besoin
  de savoir si le client est connecté". 
  Le setConnected est envoyé dans les composants qui on besoin de gérer la déconnexion ou la connexion
  du client. */
  const [connected, setConnected] = useState(false);

  /* Le useEffect s'assure de la création de l'élément localStorage pour la persistence de la connexion. */
  useEffect(() => {
    const connected = localStorage.getItem("connected");
    setConnected(connected === "true");
  }, []);

  return (
    <div>
      <Navbar connected={connected} setConnected={setConnected} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<UserLibrary />} />
        <Route path="/ajout" element={<Ajout />} />
        <Route
          path="/login"
          element={<Connexion setConnected={setConnected} />}
        />
      </Routes>
    </div>
  );
}

export default AllPages;
