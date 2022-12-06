import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_PK);

const Payment = () => {
  const booking = useLoaderData();
  const { name, appointmentDate, slot, fee } = booking;
  return (
    <div>
      <h3 className="text-3xl">Payment for {name}</h3>
      <p>
        Please pay <strong>${fee}</strong> for {name} on {appointmentDate} at{" "}
        {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
