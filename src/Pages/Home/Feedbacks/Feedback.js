import React from "react";

const Feedback = ({ feedback }) => {
  const { comment, img, name, state } = feedback;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{comment}</p>
        <div className="flex items-center mt-9">
          <img className="w-16 h-16 mr-4" src={img} alt="" />
          <div>
            <h4 className="font-semibold text-xl">{name}</h4>
            <p>{state}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
