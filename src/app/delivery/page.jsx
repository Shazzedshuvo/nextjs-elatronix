"use client";

import Link from "next/link";
import React from "react";
import { FiTruck, FiHome, FiClock, FiCreditCard } from "react-icons/fi";

const DeliveryPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Page Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8 text-center">
        Fast & Reliable Delivery 
      </h1>

      {/* Delivery Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
          <FiTruck size={48} className="text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Free Delivery</h2>
          <p className="text-gray-500 text-sm">
            Enjoy free delivery on all orders over 500৳. Fast and reliable shipping to your doorstep.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
          <FiHome size={48} className="text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Home Delivery</h2>
          <p className="text-gray-500 text-sm">
            We deliver directly to your home, ensuring your products arrive safely and on time.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
          <FiClock size={48} className="text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Fast Service</h2>
          <p className="text-gray-500 text-sm">
            Our delivery is quick and efficient, so you get your orders in no time.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Have questions about delivery or shipping?
        </p>
        <Link href="/contact"><button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition text-lg font-semibold">
          Contact Us
        </button></Link>
      </div>

      {/* Detailed Delivery Description */}
      <div className="mt-16 w-full max-w-5xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Delivery Details</h2>

        <p className="text-gray-600 mb-6 text-center">
          We offer multiple delivery options to make sure your order reaches you safely and on time.
        </p>

        {/* Delivery Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Delivery Type</th>
                <th className="px-4 py-2 border">Charge</th>
                <th className="px-4 py-2 border">Estimated Time</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border flex items-center gap-2"><FiTruck /> Standard Delivery</td>
                <td className="px-4 py-2 border">50৳</td>
                <td className="px-4 py-2 border">3-5 days</td>
                <td className="px-4 py-2 border">Affordable and reliable delivery for all orders under 500৳.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border flex items-center gap-2"><FiHome /> Home Delivery</td>
                <td className="px-4 py-2 border">100৳</td>
                <td className="px-4 py-2 border">1-3 days</td>
                <td className="px-4 py-2 border">Direct home delivery for quick and safe arrival of your products.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border flex items-center gap-2"><FiClock /> Express Delivery</td>
                <td className="px-4 py-2 border">200৳</td>
                <td className="px-4 py-2 border">Same day / 24 hours</td>
                <td className="px-4 py-2 border">Fastest delivery option for urgent orders.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border flex items-center gap-2"><FiCreditCard /> Cash on Delivery</td>
                <td className="px-4 py-2 border">Included</td>
                <td className="px-4 py-2 border">Varies</td>
                <td className="px-4 py-2 border">Pay when your order is delivered. No extra charges.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-500 mt-6 text-sm text-center">
          * Delivery charges may vary depending on your location. Estimated times are based on city center deliveries.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
  {/* Heading */}
  <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
    Delivery Information
  </h1>

  {/* Blog / Article Content */}
  <p className="text-gray-700 mb-4 leading-relaxed">
    When you place an order with us, we ensure that your products reach you safely and on time. We offer multiple delivery options to suit your needs.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
    Standard Delivery
  </h2>
  <p className="text-gray-700 mb-4 leading-relaxed">
    Standard Delivery is perfect for those who want a reliable and affordable option. The charge is <strong>50৳</strong> and your order will typically arrive within <strong>3-5 days</strong>. This is ideal for small to medium-sized orders.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
    Home Delivery
  </h2>
  <p className="text-gray-700 mb-4 leading-relaxed">
    Our Home Delivery service brings your order directly to your doorstep. The charge is <strong>100৳</strong> and delivery time is usually <strong>1-3 days</strong>. This ensures a convenient and quick arrival for your products, especially for busy schedules.
  </p>

  <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
    Express Delivery
  </h2>
  <p className="text-gray-700 mb-4 leading-relaxed">
    Need your order urgently? Choose Express Delivery. The fee is <strong>200৳</strong> and your products will be delivered within <strong>same day or 24 hours</strong>. This is the fastest way to get your items when time is critical.
  </p>

  <p className="text-gray-600 mt-6 leading-relaxed text-sm">
    *Note: Delivery charges may vary based on your location. Estimated delivery times are approximate and depend on city and area traffic conditions. We always strive to ensure your orders reach you safely and promptly.
  </p>
</div>

    </section>
  );
};

export default DeliveryPage;
