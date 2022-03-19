import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {/* map for mapping and iterating array  */}
      {/* add key in return otherwise will get warning of key must be unique */}
   {/* ...book - spread operator */}
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


ReactDOM.render(<BookList />, document.getElementById("root"));
