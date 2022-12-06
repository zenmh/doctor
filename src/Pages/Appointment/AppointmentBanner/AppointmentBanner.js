import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-32">
        <img
          src={chair}
          alt="dentist chair"
          className="w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
