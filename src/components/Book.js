import React from "react";
import { useState, useEffect } from "react";
import ISBNApi from "../ISBNapi";

function Book({ books }) {
  const [apiBook, setApiBook] = useState([]);

  let ISBN = 9780670919536;

  function APIFetch(data) {
    ISBNApi.getDetailsFromISBN(data)
      .then((apiBook) => setApiBook(apiBook))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    APIFetch();
  }, []);

  return (
    <div>
      <h1>Mes livres.</h1>
      {books.map((book) => (
        <div key={book.ISBN}>
          <p>{book.ISBN}</p>
          <p key={book.user}>{book.user}</p>
        </div>
      ))}
      <div>
        <p>test</p>
      </div>
    </div>
  );
}

export default Book;
