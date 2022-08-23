import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyLibrary.css";
import Card from "./Card";
import Book from "../API/Book";
import Image from './Image'
import RemoveButton from "./RemoveButton";
import Notification from "./Notification";

const MyLibrary = () => {
  const [library, setlibrary] = useState<Book[]>([]);
  const [notification, setnotification] = useState(false);

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
        setlibrary(data);
      });
  };

  const showNotification = () => {
    fetchBooksHandler();
    setnotification(true);
  };

  if (notification === true) {
    const vanishNotification = setTimeout(() => {
      setnotification(false);
    }, 5000);
  }

  if (library.length > 0) {
    return (
      <div>
        <p>This is my beautiful working Library</p>
        <div className="library">
          {library.map((book: Book) => (
            <Card key={book.googleId}>
            <div className="img-container">
              <Image book={book} />
            </div>
            <div className="text-container">
              <p className="title">{book.title}</p>
              <p className="authors">{book.authors}</p>
            </div>
            <RemoveButton onChange={fetchBooksHandler} book={book}/>
          </Card>
          ))}
        </div>
        {notification === true && <Notification className="notification-appear" />}
      </div>
    );
  } else {
    return <p>Keine Bücher gefunden</p>;
  }
};

export default MyLibrary;
