import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const infos = [
    {
      name: "Opening Hours",
      description: "It's open 9:00 am to 9:00 pm everyday",
      icon: clock,
      bg: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      name: "Visit Our Location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bg: "bg-accent",
    },
    {
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bg: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {infos.map((info, idx) => (
        <InfoCard key={idx} info={info} />
      ))}
    </div>
  );
};

export default InfoCards;
