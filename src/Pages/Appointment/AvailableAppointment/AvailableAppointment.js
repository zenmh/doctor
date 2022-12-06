import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import Treatment from "./Treatment";

const AvailableAppointment = ({ selectedDate }) => {
  const [getTreatment, setGetTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: treatments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["treatments", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctor-server-nu.vercel.app/treatments?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <p className="font-bold text-secondary text-center text-xl">
        Available Appointments on {date}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-24 mb-32">
        {treatments.map((treatment) => (
          <Treatment
            key={treatment._id}
            treatment={treatment}
            setGetTreatment={setGetTreatment}
          />
        ))}
      </div>
      {getTreatment && (
        <BookingModal
          selectedDate={selectedDate}
          setGetTreatment={setGetTreatment}
          getTreatment={getTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
