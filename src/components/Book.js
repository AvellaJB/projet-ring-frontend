import React from "react";
import "./Book.css";
function Book(bookDetails) {
  console.log(bookDetails.bookDetails.title);

  return (
    <div className="book-container">
      <h2>{bookDetails.bookDetails.title}</h2>
      <div className="img-container">
        <img
          src={`https://covers.openlibrary.org/b/isbn/${bookDetails.bookDetails.isbn_13}-L.jpg`}
        />
      </div>
      <h3>{bookDetails.bookDetails.publish_date}</h3>
    </div>
  );
}

export default Book;
