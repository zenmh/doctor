import React from "react";

const Service = ({ serviceData }) => {
  const { icon, name, description } = serviceData;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-center font-semibold text-xl">{name}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default Service;
