import React from "react";
import bgImg from "../../../assets/images/appointment.png";
import BtnP from "../../../Components/Buttons/BtnP";

const Contact = () => {
  return (
    <div className="mt-52 pt-12 pb-16" style={{ background: `url(${bgImg})` }}>
      <h4 className="text-xl font-bold text-center text-secondary">
        Contact Us
      </h4>
      <h2 className="text-4xl text-center text-white mt-3">
        Stay connected with us
      </h2>
      <div className="flex justify-center items-center">
        <form className="mt-10">
          <input
            className="w-96 py-3 pl-5 rounded-lg"
            placeholder="Email Address"
            type="email"
            name="email"
          />
          <br />
          <input
            className="w-96 py-3 pl-5 rounded-lg mt-5"
            placeholder="Subject"
            type="text"
            name="subject"
          />
          <br />
          <textarea
            className="w-96 py-3 pl-5 rounded-lg mt-5"
            placeholder="Your Message"
            name="message"
          ></textarea>
          <br />
          <div className="flex justify-center mt-7">
            <BtnP>Submit</BtnP>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
