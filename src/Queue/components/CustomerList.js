import React from 'react';
import Customer from './Customer';
import './CustomerList.css';

export default (props) => {
  const { customer } = props;
  return (
    <div className='customer-list'>
      {customer.map((item) => (
        <Customer key={item.id} customer={item} />
      ))}
    </div>    
  );
};
