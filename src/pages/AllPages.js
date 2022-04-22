import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserLibrary from "./UserLibrary";
import Ajout from "./Ajout";
import Home from "./Home";
import Connexion from "./Connexion";
import Navbar from "../components/Navbar";

function AllPages() {
  const [connected, setConnected] = useState(false);

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
