import React from "react";
import { Route, Routes } from "react-router-dom";
import Bibliotheque from "./Bibliotheque";

function AllPages() {
  return (
    <Routes>
      <Route path="/bibliotheque" element={<Bibliotheque />} />
    </Routes>
  );
}

export default AllPages;
