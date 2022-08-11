import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../API/Book";
import searchBooks from "../API/BooksAPI";
import "./SearchBar.css";

interface NewSearchResults {
  onGettingSearchResults: (data: Book[] | undefined) => void;
};

const SearchBar: React.FC<NewSearchResults> = (props) => {
  const inputData = useRef<HTMLInputElement>(null);
  const nav = useNavigate();
  function handleClick() {
    searchBooks(inputData.current!.value).then(
      (data) => {
        props.onGettingSearchResults(data);
      }
    );
    nav("./search")
  }

  return (
    <div className="search-bar">
      <input ref={inputData} className="search-input" type="text" />
      <button onClick={handleClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
