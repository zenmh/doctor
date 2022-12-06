import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Feedbacks from "../Feedbacks/Feedbacks";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="md:mx-5 mx-1">
      <Banner />
      <InfoCards />
      <Services />
      <MakeAppointment />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default Home;
