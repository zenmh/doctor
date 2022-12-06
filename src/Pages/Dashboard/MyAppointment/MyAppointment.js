import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctor-server-nu.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) return <progress className="progress w-full mt-20"></progress>;
  return (
    <div>
      <h2 className="text-2xl">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i} className="hover">
                <th>{i + 1}</th>
                <td>{booking?.patient}</td>
                <td>{booking?.name}</td>
                <td>{booking?.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  {booking?.fee && !booking?.paid && (
                    <Link
                      to={`/dashboard/payment/${booking?._id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Pay
                    </Link>
                  )}
                  {booking?.fee && booking?.paid && (
                    <b className="text-primary font-bold">Paid</b>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
