import React from 'react';
import { FaMobileAlt, FaDesktop, FaHome, FaGamepad, FaPlug } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  { icon: <FaMobileAlt />, title: "Smart Phone", offer: "Up To 25% OFF", color: "text-red-500", href: "/shop/1" },
  { icon: <FaDesktop />, title: "Office Computer", offer: "Up To 15% OFF", color: "text-blue-500", href: "/shop/3" },
  { icon: <FaHome />, title: "Home", offer: "Up To 30% OFF", color: "text-green-500", href: "/" },
  { icon: <FaGamepad />, title: "Game Console", offer: "Up To 20% OFF", color: "text-purple-500", href: "/shop/13" },
  { icon: <FaPlug />, title: "More Accessories", offer: "Over 25000 products", color: "text-yellow-500", href: "/shop" },
];

const LastNav = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 px-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="flex items-center space-x-3 cursor-pointer p-4 rounded shadow hover:shadow-lg transition-all duration-200 bg-white flex-1 min-w-[180px]"
          >
            <span className={`${service.color} text-3xl hover:text-purple-600`}>
              {service.icon}
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700 hover:text-purple-700">{service.title}</span>
              <span className="text-sm text-gray-500 hover:text-purple-500">{service.offer}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastNav;
