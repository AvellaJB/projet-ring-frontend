import React, { useState } from "react";
import services from "../services";
import "./AddBook.css";

function getFormValue(elements, name) {
  return elements[name]?.value;
}

export function AddBook({ refresh }) {
  const [value, setValue] = useState("");

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
      .then(() => {
        refresh();
        setValue("");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="formCSS">
        <div className="formCSS">
          <h1>Ajoutez un livre,</h1>
          <input
            className="inputAddBook"
            name="ISBN"
            type="text"
            placeholder="Entrez le numéro ISBN"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p className="textISBN">
            Le numéro ISBN est unique à votre livre. Vous le trouverez au dos de
            l'oeuvre, c'est un code à 10 ou 13 chiffres.
          </p>
        </div>
        <div>
          <button className="buttonAddBook">Ajouter</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
