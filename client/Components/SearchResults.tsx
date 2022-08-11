import React, { FC } from "react";
import "./SearchResults.css";
import SearchBar from "./SearchBar";
import Card from "./Card";
import { ProgressPlugin } from "webpack";
import Book from "../API/Book";
import AddButton from "./AddButton"

interface searchResultsProps {
  searchResults: Book[] | undefined;
}

const SearchResults: FC<searchResultsProps> = (props) => {
  const { searchResults } = props;

  if (searchResults !== undefined) {
    return (
      <div className="searchresults">
        {searchResults.map((book) => (
          <div key={book.googleId} className="card">
            <Card book={book} />
            <AddButton book={book} />
          </div>
        ))}
      </div>
    );
  } else {
    return <p> Welcon to My Library </p>;
  }
};

export default SearchResults;
