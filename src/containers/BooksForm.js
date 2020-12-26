import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createBook } from '../actions/index';

class BooksFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      errorMessage: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { createBook } = this.props;
    const { title, category } = this.state;

    if (title === '' || category === '') {
      this.setState({
        errorMessage: 'Please provide complete details',
      });
    } else {
      createBook({
        id: Math.floor(Math.random() * 100),
        title,
        category,
      });
      e.target.reset();
      this.setState({
        title: '',
        category: '',
        errorMessage: '',
      });
    }
  }

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const { errorMessage } = this.state;

    return (
      <>
        <div className="hr-container">
          <hr />
        </div>
        <h2 className="add-bk-title">ADD NEW BOOK</h2>
        <form className="m-0 row" onSubmit={this.handleSubmit}>
          <h4>{errorMessage}</h4>
          <input className="col-md-7 grey-bd w-100" type="text" name="title" placeholder="Book title" onChange={this.handleChange} />
          <div className="col-md-3 category-box">
            <select className="grey-bd categories w-100" name="category" onChange={this.handleChange} defaultValue="default">
              <option disabled value="default">Category</option>
              {categories.map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <button className="col-md-2 add-bk-btn w-100 font-weight-bold" type="submit">Add Book</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksFrom.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksFrom);
