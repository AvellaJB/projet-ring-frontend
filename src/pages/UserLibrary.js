import React from "react";
import SmartBook from "../components/SmartBook";
import services from "./../services";
import { useState, useEffect } from "react";
import ISBNApi from "../ISBNapi";
import "./UserLibrary.css";

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
      <h1>Mes livres.</h1>
      <div className="library">
        {books.map((book) => (
          <SmartBook ISBN={book.ISBN} />
        ))}
      </div>
    </div>
  );
}

export default Bibliotheque;
