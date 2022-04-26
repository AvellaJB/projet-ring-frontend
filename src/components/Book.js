import React from "react";
import "./Book.css";

function Book(bookDetails) {
  /* Ici c'est notre livre simple qui prend les détails envoyés par l'API de OpenLibrary et
les affiches. La mise en forme est également gérée ici (CSS) */

  console.log(bookDetails);

  return (
    <div className="book-container">
      <h2>{bookDetails.bookDetails.title}</h2>
      <div className="img-container">
        <img
          src={`https://covers.openlibrary.org/b/isbn/${bookDetails.bookDetails.isbn_13}-L.jpg`}
        />
      </div>
      <h3>{bookDetails.bookDetails.publish_date}</h3>
      <button className="button-book" onClick={bookDetails.onDeleteBook}>
        Supprimer
      </button>
    </div>
  );
}

/* function DeleteButton({ onDelete, children }) {
  return <button onClick={onDelete}>X {children}</button>;
} */

export default Book;
