import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CREATE_BOOK } from '../actions/index';

class BooksFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { CREATE_BOOK } = this.props;
    const { title, category } = this.state;

    if (title === '' || category === '') {
      const msg = 'Please provide complete details';
      document.getElementById('error').innerHTML = msg;
    } else {
      CREATE_BOOK({
        id: Math.floor(Math.random() * 100),
        title,
        category,
      });
      document.getElementById('form').reset();
      document.getElementById('error').innerHTML = '';
      this.setState({
        title: '',
        category: '',
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

    return (
      <form id="form">
        <div id="error" />
        Title:
        <input type="text" name="title" onChange={this.handleChange} />
        Categories:
        <select name="category" onChange={this.handleChange} defaultValue="default">
          <option disabled value="default">-- select category --</option>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  CREATE_BOOK: book => {
    dispatch(CREATE_BOOK(book));
  },
});

BooksFrom.propTypes = {
  CREATE_BOOK: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksFrom);
