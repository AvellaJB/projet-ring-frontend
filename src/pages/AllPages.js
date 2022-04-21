import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLibrary from "./UserLibrary";
import Ajout from "./Ajout";

function AllPages() {
  return (
    <Routes>
      <Route path="/library" element={<UserLibrary />} />
      <Route path="/ajout" element={<Ajout />} />
    </Routes>
  );
}

export default AllPages;
