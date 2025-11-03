import Link from 'next/link';
import React from 'react';
import { FaTruck, FaThumbsUp, FaUndo, FaLock, FaStar } from 'react-icons/fa';

const features = [
  { icon: <FaTruck />, title: "Free Delivery", desc: "From $50", color: "text-red-500", href: "/delivery" },
  { icon: <FaThumbsUp />, title: "99% Positive", desc: "Feedback", color: "text-green-500", href: "/reviews" },
  { icon: <FaUndo />, title: "365 Days", desc: "For Free Return", color: "text-blue-500", href: "/return-policy" },
  { icon: <FaLock />, title: "Payment", desc: "Secure System", color: "text-purple-500", href: "/payment" },
  { icon: <FaStar />, title: "Only Best", desc: "Brands", color: "text-yellow-500", href: "/brands" },
];

const Sarvis = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 px-4">
        {features.map((feature, index) => (
          <Link key={index} href={feature.href} className="flex items-center space-x-3 p-4 rounded shadow hover:shadow-lg transition-all duration-200 cursor-pointer flex-1 min-w-[180px] bg-white">
            <span className={`${feature.color} text-2xl hover:text-purple-600`}>
              {feature.icon}
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 hover:text-purple-700">{feature.title}</span>
              <span className="text-sm text-gray-500 hover:text-purple-500">{feature.desc}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sarvis;
