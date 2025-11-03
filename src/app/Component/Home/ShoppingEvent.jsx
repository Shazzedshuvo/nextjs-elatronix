"use client";

import React, { useEffect, useState } from "react";
import { FaGift, FaTruck } from "react-icons/fa";
import Link from "next/link";

const ShoppingEvent = () => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your event end date here
    const eventEnd = new Date();
    eventEnd.setDate(eventEnd.getDate() + 59); // 59 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const distance = eventEnd - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / 1000 / 60) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 px-4 md:px-16 bg-[#944DF5]">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 rounded-xl overflow-hidden shadow-lg">
        
        {/* ---------- Left Side: Info & Countdown ---------- */}
        <div className="w-full md:w-1/2 p-3 flex flex-col justify-center items-start bg-gray-300">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Apple Shopping Event
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-800">
            Hurry and get discounts on all Apple devices up to 20%
          </p>

          {/* Countdown Timer */}
          <div className="flex flex-wrap gap-4 mb-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-white text-gray-900 font-bold rounded-lg px-4 py-2 shadow-md min-w-[70px]"
              >
                <span className="text-2xl md:text-3xl">{item.value}</span>
                <span className="text-xs md:text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300"
            >
              Shop Now
            </Link>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md shadow-md transition-all duration-300">
              Use Code : SALE25OFF
            </button>
          </div>
        </div>

        {/* ---------- Right Side: Image ---------- */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 bg-[#944DF5]">
          <img
            src="/benar2.png"
            alt="Apple Banner"
            className="w-full max-w-lg h-auto rounded-lg drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingEvent;
