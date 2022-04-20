import React from "react";
import services from "./../services";
import { useState, useEffect } from "react";

function Book() {
  const [books, setBooks] = useState([]);

  function fetchAndSetBooks() {
    services
      .getBookList()
      .then((books) => setBooks(books))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchAndSetBooks();
    console.log(services.getBookList());
  }, []);

  return (
    <div>
      <h1>Mes livres.</h1>
      {books.map((book) => (
        <div>
          <p key={book.ISBN}>{book.ISBN}</p>
          <p key={book.ISBN}>{book.user}</p>
        </div>
      ))}
    </div>
  );
}

export default Book;
