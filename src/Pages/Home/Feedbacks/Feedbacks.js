import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Feedback from "./Feedback";

const Feedbacks = () => {
  const feedbacks = [
    {
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      name: "Winson Herry",
      state: "California",
    },
    {
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      name: "Sophia",
      state: "New York",
    },
    {
      comment:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      name: "Eun-U ",
      state: "Seoul",
    },
  ];

  return (
    <section className="mt-24">
      <div className="flex justify-between">
        <div>
          <h4 className="font-bold text-xl text-secondary">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <img src={quote} className="w-48 h-40" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">
        {feedbacks.map((feedback, idx) => (
          <Feedback key={idx} feedback={feedback} />
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
