import React from "react";

import "./index.css";

const Card = ({ user }) => {
  return (
    <div className="card">
      <div>
        <img src={user.avatar} alt="avatar" className="card__avatar" />
      </div>
      <div className="card__right">
        <h2 className="card__title">{`${user.first_name} ${user.last_name}`}</h2>
        <p className="card__mail">{user.email}</p>
        <p className="card__birth">{user.date_of_birth}</p>
      </div>
    </div>
  );
};

export default Card;
