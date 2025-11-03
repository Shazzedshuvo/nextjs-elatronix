"use client";
import React, { useState } from "react";
import { FaCreditCard, FaLock } from "react-icons/fa";
import Link from "next/link";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-md px-4">
        
        {/* Blog/Article Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Secure Online Payment</h1>
          <p className="text-gray-600 text-sm">
            Complete your purchase safely and quickly using our secure payment system. 
            We ensure your personal and card information is fully protected. 
            Enjoy fast processing and instant confirmation of your order. 
            Pay with confidence and receive your products hassle-free.
          </p>
        </div>

        {/* Payment Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaCreditCard /> Payment Details
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name on Card</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="w-full border p-2 rounded mt-1"
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 font-medium">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="XXX"
                  className="w-full border p-2 rounded mt-1"
                />
              </div>
            </div>

            <Link href="/payment-success">
              <button
                type="button"
                className="w-full bg-indigo-600 text-white py-2 rounded mt-2 flex justify-center items-center gap-2 hover:bg-indigo-700 transition-all"
              >
                <FaLock /> Pay Now
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
