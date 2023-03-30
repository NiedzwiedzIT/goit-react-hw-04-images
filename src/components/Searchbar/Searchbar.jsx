import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Searchbar(props) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Empty guery search.', { theme: 'colored' });
      return;
    }

    props.qwe(searchQuery);
    setSearchQuery('');
  };

  return (
    <section className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search images..."
          value={searchQuery}
          onChange={handleInputChange}
          className="SearchForm-input"
        />
      </form>
    </section>
  );
}

Searchbar.propTypes = {
  qwe: PropTypes.func.isRequired,
};
