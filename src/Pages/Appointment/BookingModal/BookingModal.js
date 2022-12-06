import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({
  getTreatment,
  setGetTreatment,
  selectedDate,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const { name, slots, fee } = getTreatment;
  const date = format(selectedDate, "PP");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const patient = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      appointmentDate: date,
      name,
      patient,
      slot,
      email,
      phone,
      fee,
    };

    fetch("https://doctor-server-nu.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.info("Apointment booked", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          refetch();
        } else {
          toast.error(data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((err) => console.error("Error", err));

    setGetTreatment(null);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="mt-5">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full mt-6"
            />
            <select name="slot" className="select select-bordered w-full mt-6">
              {slots.map((slot, idx) => (
                <option key={idx}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered w-full mt-6"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mt-6"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Enter E-mail"
              className="input input-bordered w-full mt-6"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full mt-6 btn btn-accent"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
