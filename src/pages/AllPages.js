import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLibrary from "./UserLibrary";

function AllPages() {
  return (
    <Routes>
      <Route path="/library" element={<UserLibrary />} />
    </Routes>
  );
}

export default AllPages;
