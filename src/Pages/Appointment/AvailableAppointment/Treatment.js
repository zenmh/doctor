import React from "react";

const Treatment = ({ treatment, setGetTreatment }) => {
  const { name, slots, fee } = treatment;
  return (
    <div className="card shadow-xl py-6">
      <div className="card-body text-center">
        <h2 className="text-center font-semibold text-xl text-secondary">
          {name}
        </h2>
        <p className="text-[14px] mt-2">
          {slots.length ? slots[0] : "Try another day"}
        </p>
        <p className="text-[12px] mt-3">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>Fee : ${fee}</p>
        <div className="card-actions justify-center mt-4">
          <label
            disabled={slots.length === 0}
            onClick={() => setGetTreatment(treatment)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
