"use client";

import React, { useEffect, useState } from "react";
import { FaGift, FaTruck } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const ShoppingEvent = () => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
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
    <section className="py-16 px-4 bg-gradient-to-r from-[#7B2FF7] to-[#944CF5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Apple Shopping Event
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl">
            Hurry and get discounts on all Apple devices up to <span className="font-bold text-indigo-600">20%</span>
          </p>

          {/* Countdown */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-indigo-50 text-indigo-700 font-bold rounded-xl px-4 py-2 shadow-md min-w-[70px]"
              >
                <span className="text-2xl sm:text-3xl">{item.value}</span>
                <span className="text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
            >
              Shop Now
            </Link>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300">
              Use Code : SALE25OFF
            </button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <img
            src="/benar2.png"
            alt="Apple Banner"
            className="w-full max-w-lg h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ShoppingEvent;
