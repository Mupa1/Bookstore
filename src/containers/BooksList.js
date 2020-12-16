import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';

const BooksList = ({ books }) => (
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
        <Book key={book.id} book={book} />
      ))}
    </tbody>
  </table>
);

BooksList.propTypes = {
  books: PropTypes.isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(BooksList);
