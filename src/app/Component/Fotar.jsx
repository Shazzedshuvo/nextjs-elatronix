"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const Fotar = () => {
  return (
    <footer className="bg-[#ECF2F7] text-gray-700 pt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Electronix</h1>
          <p className="text-sm">
            Magnam vivamus quas vero urna officiis beatae facilisis, morbi, etiam mollis magni hymenaeos odio animi, molestiae etiam temporibus!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">My Account</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/my-account" className="hover:text-gray-900">My Account</Link></li>
            <li><Link href="/order-history" className="hover:text-gray-900">Order History</Link></li>
            <li><Link href="/wish-list" className="hover:text-gray-900">Wish List</Link></li>
            <li><Link href="/search" className="hover:text-gray-900">Search Terms</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Customer Service</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/delivery" className="hover:text-gray-900">Delivery Information</Link></li>
            <li><Link href="/about-us" className="hover:text-gray-900">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info Horizontal */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-4">Contact Info</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#944cf5] text-white">
                <FaMapMarkerAlt />
              </span>
              <span>2653 Street Eleshop</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#944cf5] text-white">
                <FaPhoneAlt />
              </span>
              <span>Free Support: +012-2563-2148</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#944cf5] text-white">
                <FaEnvelope />
              </span>
              <span>Orders Support: sale@Yoursite.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-[#944cf5] text-white">
                🕒
              </span>
              <span>Working Days: Mon - Fri / 8:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-8 py-4 text-center text-sm text-gray-600">
        Copyright © 2024 Electronix. All rights reserved. | Terms Of Use | Help & FAQs | Careers
      </div>
    </footer>
  );
};

export default Fotar;
