import axios from "axios";
import { response } from "express";
import React from "react";
import Book from "../API/Book";
import "./AddButton.css";

const AddButton = (props: { book: Book }) => {
  const { book } = props;

  const AddButtonHandler = async () => {
    // await axios.post("http://localhost:3030/addBook", book);
  }
  return (
    <button className="add-button" onClick={AddButtonHandler}>
      Add Book to Library
    </button>
  );
};

export default AddButton;
