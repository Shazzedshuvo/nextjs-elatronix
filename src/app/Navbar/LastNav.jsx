import React from "react";
import {
  FaMobileAlt,
  FaDesktop,
  FaHome,
  FaGamepad,
  FaPlug,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    icon: <FaMobileAlt />,
    title: "Smart Phone",
    offer: "Up To 25% OFF",
    color: "text-blue-600",
    href: "/shop/1",
  },
  {
    icon: <FaDesktop />,
    title: "Office Computer",
    offer: "Up To 15% OFF",
    color: "text-indigo-600",
    href: "/shop/3",
  },
  {
    icon: <FaHome />,
    title: "Home Appliances",
    offer: "Up To 30% OFF",
    color: "text-green-600",
    href: "/",
  },
  {
    icon: <FaGamepad />,
    title: "Game Console",
    offer: "Up To 20% OFF",
    color: "text-purple-600",
    href: "/shop/13",
  },
  {
    icon: <FaPlug />,
    title: "Accessories",
    offer: "Over 25,000 Products",
    color: "text-yellow-500",
    href: "/shop",
  },
];

const LastNav = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 px-4">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group flex items-center space-x-3 cursor-pointer p-5 rounded-xl bg-white/80 border border-gray-200 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[180px]"
          >
            <span
              className={`${service.color} text-3xl transition-transform duration-300 group-hover:scale-110`}
            >
              {service.icon}
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800 group-hover:text-blue-600">
                {service.title}
              </span>
              <span className="text-sm text-gray-500 group-hover:text-gray-700">
                {service.offer}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LastNav;
