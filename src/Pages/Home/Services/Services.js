import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import treatment from "../../../assets/images/treatment.png";
import Service from "./Service";
import BtnP from "../../../Components/Buttons/BtnP";

const Services = () => {
  const servicesData = [
    {
      icon: fluoride,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      icon: cavity,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      icon: whitening,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <div className="mt-32">
      <h4 className="text-center font-bold text-xl text-secondary">
        OUR SERVICES
      </h4>
      <h2 className="text-center text-[36px]">Services We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {servicesData.map((serviceData, idx) => (
          <Service key={idx} serviceData={serviceData} />
        ))}
      </div>
      <div className="hero mt-36 lg:pl-52 lg:pr-40">
        <div className="hero-content gap-x-24 flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <BtnP>Get Started</BtnP>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
