import React from "react";
import { useState, useEffect } from "react";
import ISBNApi from "../ISBNapi";
import Book from "./Book";

/* Notre livre intelligent prend en props une liste d'ISBN et s'occupe de faire 
l'appel à l'API OpenLibrary et envoie les infos d'OPENLibrary à notre livre classique.  */

function SmartBook({ ISBN }) {
  /* Meme principe que pour notre bibliothèque sauf qu'on fait appel à l'api de OpenLibrary. */
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
