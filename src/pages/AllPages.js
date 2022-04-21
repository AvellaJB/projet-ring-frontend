import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLibrary from "./UserLibrary";
import Ajout from "./Ajout";
import Home from "./Home";
import ProfilPage from "./ProfilPage";

function AllPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/library" element={<UserLibrary />} />
      <Route path="/ajout" element={<Ajout />} />
      <Route path="/profil" element={<ProfilPage />} />
    </Routes>
  );
}

export default AllPages;
