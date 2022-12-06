import React from "react";

const InfoCard = ({ info }) => {
  const { name, icon, description, bg } = info;
  return (
    <div
      className={`card text-white pl-6 pr-8 py-4 lg:card-side shadow-xl ${bg}`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
