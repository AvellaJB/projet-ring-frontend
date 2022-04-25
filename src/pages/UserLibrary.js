import React from "react";
import SmartBook from "../components/SmartBook";
import AddBook from "../components/AddBook";
import services from "./../services";
import { useState, useEffect } from "react";
import "./UserLibrary.css";

/* Nous avons créer une page UserLibrary qui contient 
tous nos livres. Nous avons simplement ici récupéré la liste d'ISBN présent 
dans notre BDD Mongo pour la passer à notre livre inteliggent.
*/

function Bibliotheque() {
  /* La liste de lvre est récupérée et stockée dans un state. */
  const [books, setBooks] = useState([]);

  /* Fonction qui va récupérer les livres dans la BDD Mongo. 
 Pour ça nous avons importé notre fichier services et utilisé la fonction getBookList()
 Une fois les résultat obtenu ils sont envoyé dans le state setBooks. */
  function fetchAndSetBooks() {
    services
      .getBookList()
      .then((result) => setBooks(result))
      .catch((err) => {
        console.log(err);
      });
  }

  /* Le useEffect avec un array vide permet de lancer notre fonction fetch uniquement une fois.
  et pas à l'infini.*/

  useEffect(() => {
    fetchAndSetBooks();
  }, []);
  console.log(books);

  return (
    <div>
      <AddBook />
      <h1>Mes livres.</h1>
      <div className="library">
        {/* On utilise le state books pour map sur chaque livre et envoyer
        l'ISBN à notre livre intelligent. */}
        {books.map((book) => (
          <SmartBook ISBN={book.ISBN} bookID={book._id} />
        ))}
      </div>
    </div>
  );
}

export default Bibliotheque;
