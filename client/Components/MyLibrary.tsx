import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyLibrary.css";
import Card from "./Card";
import Book from "../API/Book";
import { match } from "assert";

const MyLibrary = () => {
  const [library, setlibrary] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooksHandler();
  }, []);

  const fetchBooksHandler = () => {
    axios
      .get("http://localhost:3030/getBooks")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setlibrary(data)
      });
  };

  if (library.length > 0) {
    console.log(library);
    
    return (
      <div>
        <p>This is my Library</p>
        {library.map((book: Book) => (
          <Card key={Math.random()} book={book} />
        ))}
      </div>
    );
  } else {
    return <p>Keine Bücher gefunden</p>;
  }
};

export default MyLibrary;
