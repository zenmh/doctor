import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import BtnP from "../../../Components/Buttons/BtnP";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="hero md:mt-64"
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          alt=""
          className="w-1/2 -mt-36 hidden md:block rounded-lg shadow-2xl"
        />
        <div>
          <h4 className="text-secondary text-xl font-bold">Appointment</h4>
          <h2 className="text-5xl font-semibold text-white my-5">
            Make an appointment Today
          </h2>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <BtnP>Take Appointment</BtnP>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
