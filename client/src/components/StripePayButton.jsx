import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StripePayButton = ({ cartItems }) => {
  //cartItems is a result of destructuring from props
  const handleCheckout = async () => {
    try {
      const response = await axios.post("/api/paymentIntent", {
        cartItems,
      });

      if (response.data.url) {
        window.location.assign(response.data.url); // Forwarding user to Stripe
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <a
        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        onClick={() => {
          handleCheckout();
        }}
      >
        Checkout
      </a>
    </>
  );
};

export default StripePayButton;
