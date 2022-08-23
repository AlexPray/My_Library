import React, { FC, Fragment } from 'react';
import './SearchResults.css';
import Card from './Card';
import Book from '../API/Book';
import AddButton from './AddButton';

interface searchResultsProps {
  searchResults: Book[] | undefined;
}

const SearchResults: FC<searchResultsProps> = (props) => {
  const { searchResults } = props;

  if (searchResults !== undefined) {
    return (
      <div className="searchresults">
        {searchResults.map((book) => (
          <Fragment>
            <Card key={book.googleId} book={book} />
            <AddButton book={book} />
          </Fragment>
        ))}
      </div>
    );
  } else {
    return <p> Welcome to My Library </p>;
  }
};

export default SearchResults;
