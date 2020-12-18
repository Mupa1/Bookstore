import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';

const BooksList = ({ books }) => (
  <>
    <>
      <th>Books ID</th>
      <th>Title</th>
      <th>Category</th>
    </>
    <tbody>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
