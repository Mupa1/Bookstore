import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions/index';

const BooksList = ({ books, REMOVE_BOOK }) => {
  const handleRemoveBook = book => {
    REMOVE_BOOK(book);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Books ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  REMOVE_BOOK: book => {
    dispatch(REMOVE_BOOK(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  REMOVE_BOOK: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
