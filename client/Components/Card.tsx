import React from 'react';
import Book from '../API/Book';
import Image from './Image';
import './Card.css';
import AddButton from './AddButton';

const Card = (props: { book: Book }) => {
  const { book } = props;

  return (
    <div>
      <div className="img-container">
        <Image book={book} />
      </div>
      <div className="text-container">
        <p className="title">{book.title}</p>
        <p className="authors">{book.authors}</p>
      </div>
    </div>
  );
};

export default Card;
