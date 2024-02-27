// Searchbar.js
import React, { useState } from 'react';
import css from '../styles.css';
import '../index';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

return (
    <header className='Searchbar'>
      <form className='SearchForm' onSubmit={handleSubmit}>
        <button type="submit" className='Button'>
          <span className='button-label'>Search</span>
        </button>

        <input
          className='SearchFormInput'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
