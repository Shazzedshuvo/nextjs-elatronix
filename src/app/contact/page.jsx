"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaDownload,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaViber,
} from "react-icons/fa";
import FullHome from "../Component/Home/FullHome";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10">
          {/* Left Side Info */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6">
            <h2 className="text-2xl font-bold">
              Get In Touch And Feel Free To Contact Us!
            </h2>
            <p className="text-gray-600">
              Torquent ut iusto odio ut sunt quae, sagittis massa dicta euismod,
              architecto, animi architecto magnam alias porttitor mollis facilis
              corporis duis pharetra? Atque posuere, lacus tristique labore
              pulvinar? Molestias sint perspiciatis.
            </p>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-500 mt-1 text-3xl" />
              <div>
                <h3 className="font-semibold">Location Address:</h3>
                <p>9066 Green Lake Drive, Chevy Chase, MD 20815</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaWhatsapp className="text-green-500 mt-1 text-3xl" />
              <div>
                <h3 className="font-semibold">WhatsApp Us:</h3>
                <p>(800)01719052334</p>
                <p>(7923)-55-47-215</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaDownload className="text-3xl text-blue-500 mt-1" />
              <div>
                <h3 className="font-semibold">Download The App Now!</h3>
              </div>
            </div>

            {/* Reviews */}
            <div className="flex gap-6 mt-4">
              <div>
                <p className="font-bold text-xl">4.7+</p>
                <p className="text-gray-600">Review Customer</p>
              </div>
              <div>
                <p className="font-bold text-xl">A+</p>
                <p className="text-gray-600">Business Class</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-4 text-4xl ">
              <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110 transition-all" />
              <FaTwitter className="text-blue-400 cursor-pointer hover:scale-110 transition-all" />
              <FaYoutube className="text-red-600 cursor-pointer hover:scale-110 transition-all" />
              <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition-all" />
              <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition-all" />
              <FaViber className="text-purple-700 cursor-pointer hover:scale-110 transition-all" />
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name..."
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email..."
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone..."
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows="5"
                className="w-full border p-2 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
     <div className="bg-gray-50 py-16">
  {/* Section Heading */}
  <div className="mb-10 text-center">
    <h3 className="text-4xl font-extrabold text-gray-800">
      Explore Our Offer
    </h3>
    <p className="mt-4 text-gray-600 max-w-xl mx-auto">
      Check out our best products and services curated specially for you.
    </p>
  </div>

  {/* FullHome Component */}
  <div className="max-w-7xl mx-auto px-4">
    <FullHome />
  </div>
</div>

    </div>
  );
};

export default ContactPage;
