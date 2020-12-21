import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, REMOVE_BOOK, filter, CHANGE_FILTER,
}) => {
  const handleRemoveBook = book => {
    REMOVE_BOOK(book);
  };

  const handleFilterChange = e => {
    CHANGE_FILTER(e.target.value);
  };

  let filteredBooks;
  if (filter === 'All') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter(book => book.category === filter);
  }

  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Books ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(book => (
            <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  REMOVE_BOOK: book => {
    dispatch(REMOVE_BOOK(book));
  },
  CHANGE_FILTER: book => {
    dispatch(CHANGE_FILTER(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  CHANGE_FILTER: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
