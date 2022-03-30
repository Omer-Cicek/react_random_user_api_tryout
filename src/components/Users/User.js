import React from 'react';
import { useState, useEffect } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import './User.css';

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        setUser(data.results);
      } catch (error) {
        alert('Something went wrong', error, error.status);
        console.log(error);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <div className="container">
        <ul className="container-unordered-list">
          {user.map((item, idx) => {
            return (
              <li key={idx} className="container-list">
                <SingleUser item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default User;
