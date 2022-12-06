import React from "react";
import Chair from "../../../assets/images/chair.png";
import BtnP from "../../../Components/Buttons/BtnP";

const Banner = () => {
  return (
    <div className="hero lg:pl-[52px] lg:pr-9 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          className="rounded-lg shadow-2xl lg:w-1/2"
          alt="chair"
        />
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <BtnP>Get Started</BtnP>
        </div>
      </div>
    </div>
  );
};

export default Banner;
