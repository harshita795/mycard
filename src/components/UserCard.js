import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const { name, gender, phone, picture } = user;

  return (
    <div className="user-card">
      <img src={picture.large} alt={`${name.first} ${name.last}`} className="user-card__image" />
      <div className="user-card__info">
        <h2 className="user-card__name">{`${name.first} ${name.last}`}</h2>
        <p className="user-card__details">{gender}</p>
        <p className="user-card__details">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;