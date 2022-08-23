import React from "react";
import "./RemoveButton.css";
import axios from "axios";
import Book from "../API/Book";

const RemoveButton = ({
  book,
  handleChange,
}: {
  book: Book;
  handleChange: () => void;
}) => {
  const RemoveButtonHandler = async () => {
    await axios.delete(`http://localhost:3030/removeBook`, { data: book });
    handleChange();
  };
  return (
    <button className="remove-button" onClick={RemoveButtonHandler}>
      Remove book
    </button>
  );
};

export default RemoveButton;