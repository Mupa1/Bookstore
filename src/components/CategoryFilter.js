import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div>
      <select name="category" onChange={handleFilterChange}>
        {categories.map(category => (
          <option key="category">{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
