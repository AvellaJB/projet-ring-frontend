import React from "react";
import { useState, useEffect } from "react";
import ISBNApi from "../ISBNapi";
import Book from "./Book";

function SmartBook({ ISBN }) {
  const [book, setBook] = useState([]);

  let data = ISBN;

  function APIFetch() {
    ISBNApi.getDetailsFromISBN(data)
      .then((apiBook) => setBook(apiBook))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    APIFetch();
  }, []);

  return (
    <div>
      <Book bookDetails={book} />;
    </div>
  );
}

export default SmartBook;
