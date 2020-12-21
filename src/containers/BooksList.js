import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = e => {
    changeFilter(e.target.value);
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
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: book => {
    dispatch(changeFilter(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
