import React from "react";
import services from "../services";
import "./AddBook.css";

function getFormValue(elements, name) {
  return elements[name]?.value;
}

export function AddBook() {
  function handleSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const ISBN = getFormValue(elements, "ISBN");
    if (!ISBN) {
      alert("Ajouter un numero ISBN");
      return;
    }
    services
      .AddBook({ ISBN })
      .then(() => "/add-book")
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Ajoutez un livre,</h1>
          <input
            className="inputAddBook"
            name="ISBN"
            type="text"
            placeholder="Entrez le numéro ISBN"
          />
        </div>
        <div>
          <button className="buttonAddBook">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
