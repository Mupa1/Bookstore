import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;

  return (
    <tr className="book-container bg-white grey-bd row">
      <td className="col-md-5 book-info-1 d-flex flex-column p-0 m-0">
        <p className="montserrat font-weight-bold opacity p-0 m-0">{category}</p>
        <p className="book-title font-weight-bold p-0">{title}</p>
        <p className="author p-0 m-0">Jane Doe</p>
        <div className="actions d-flex">
          <p className="grey-right-bd comments m-0">Comments</p>
          <button className="remove grey-right-bd" type="button" onClick={() => handleRemoveBook(book)}>
            Remove
          </button>
          <p className="edit m-0">Edit</p>
        </div>
      </td>
      <td className="col-md-3 d-flex align-items-center p-0 m-0">
        <div className="circle" />
        <div className="percent-info montserrat grey-right-bd m-0">
          <div className="percentage">75%</div>
          <div className="opacity">Completed</div>
        </div>
      </td>
      <td className="col-md-4 book-info-3 m-0">
        <p className="opacity chapter-title m-0">CURRENT CHAPTER</p>
        <p className="chapter-num m-0">
          Chapter
          {' '}
          {id}
        </p>
        <button className="update" type="button">UPDATE PROGRESS</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
