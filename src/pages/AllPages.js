import React from "react";
import { Route, Routes } from "react-router-dom";
import Ajout from "./Ajout";
import Bibliotheque from "./Bibliotheque";

function AllPages() {
  return (
    <Routes>
      <Route path="/bibliotheque" element={<Bibliotheque />} />
      <Route path="/ajout" element={<Ajout />} />
    </Routes>
  );
}

export default AllPages;
