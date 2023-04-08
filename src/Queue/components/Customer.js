import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';
import md5 from 'md5';

export default (props) => {
  const { customer } = props;
  const expectedTime = customer.expectedTime;

  const emailHash = (customer) => {
    const emailAddress = customer.customer.emailAddress;
    const trimmedString =
      typeof emailAddress === 'string'
        ? emailAddress.trim().toLowerCase()
        : '';
    let hashEmail = md5(trimmedString)
    return `https://www.gravatar.com/avatar/${hashEmail}?s=290`
  };

  return (
    <CustomerCard>
      <ProfilePicture emailImage={() => emailHash(customer)}/>
      <Content>
        <Name>{customer.customer.name}</Name>
        <div>{new Date(expectedTime).toLocaleString()}</div>
      </Content>
    </CustomerCard>
  );
};
