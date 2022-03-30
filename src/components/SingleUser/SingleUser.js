import React from 'react';
import './SingleUser.css';

const SingleUser = ({ item }) => {
  return (
    <div className="card">
      <img src={item.picture.large} alt="userImage" className="card-img" />
      <div className="card-info">
        <p className="card-name">
          Name:
          {item.name.title < 4
            ? item.name.title
            : item.name.title.slice(0, 3)}. {item.name.first} {item.name.last}
        </p>
        <p className="card-phone">Phone Number: {item.phone} </p>
        <p className="card-email">Email: {item.email} </p>
      </div>
    </div>
  );
};

export default SingleUser;
