import React from 'react';
import './SeacrhBar.css';

export default (props) => {
  return (
    <input
      className='search-bar'
      type='search'
      placeholder='Search Customers'
      onChange={props.onSearchChange}
    />
  );
};
