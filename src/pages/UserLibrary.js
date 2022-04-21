import React from "react";
import Book from "../components/Book";
import services from "./../services";
import { useState, useEffect } from "react";
import ISBNApi from "../ISBNapi";

function Bibliotheque() {
  const [books, setBooks] = useState([]);

  function fetchAndSetBooks() {
    services
      .getBookList()
      .then((result) => setBooks(result))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchAndSetBooks();
  }, []);

  return (
    <div>
      <Book books={books} />
    </div>
  );
}

export default Bibliotheque;
