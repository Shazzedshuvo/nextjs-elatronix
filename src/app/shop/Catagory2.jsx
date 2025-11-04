"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiHeart, FiTrash2, FiShoppingCart } from "react-icons/fi";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const Catagory2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/data/data.json`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.rating - a.rating).slice(0, 8);
        setProducts(sorted);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Trending Products
      </h2>

      <div className="grid grid-cols-12 gap-8">
        {/* Left: Banner */}
        <aside className="col-span-12 lg:col-span-3 flex flex-col gap-6 order-1 lg:order-1">
          <div className="relative bg-gradient-to-r from-violet-100 to-violet-50 rounded-2xl overflow-hidden shadow-xl h-[520px] sm:h-[560px] md:h-[520px] w-full flex flex-col justify-center p-6">
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-wide text-violet-600 font-semibold m-4">
                Now Available
              </span>
              <h3 className="text-2xl font-bold mt-2 text-gray-800">
                Apple Smart Watch <br />$450.00
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Powerful performance with elegant design.
              </p>
              <Link
                href="#"
                className="inline-block mt-4 text-sm font-medium text-white bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-700 transition-all"
              >
                Shop Now
              </Link>
            </div>
            <img
              src="img-21.png"
              alt="Big Banner"
              className="absolute right-0 bottom-0 h-48 sm:h-56 md:h-64 object-contain"
            />
          </div>
        </aside>

        {/* Right: Product Grid */}
        <div className="col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 order-2 lg:order-2">
          {products.map((item) => (
            <div key={item.id} className="relative group">
              <Link href={`/shop/${item.id}`}>
                <motion.div
                  className="bg-white rounded-xl p-3 flex flex-col items-center shadow-md hover:shadow-lg cursor-pointer h-full transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="w-full h-32 sm:h-36 md:h-40 flex items-center justify-center mb-2 bg-gray-100 rounded relative overflow-hidden">
                    <img
                      src={item.images?.[0] || "/placeholder.png"}
                      alt={item.name}
                      className="object-contain h-full"
                    />

                    {/* Wishlist & Delete */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100 transition">
                        <FiHeart className="text-red-500" size={18} />
                      </button>
                      <button className="bg-white p-1 rounded-full shadow hover:bg-gray-100 transition">
                        <FiTrash2 className="text-gray-700" size={18} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-gray-800 text-center line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                  <div className="mt-1 text-indigo-600 font-bold text-sm">{item.price}৳</div>
                  <div className="mt-1 text-yellow-400 font-semibold text-xs">
                    <span className="text-black">Review:</span> {item.rating.toFixed(1)}
                  </div>
                </motion.div>
              </Link>

              {/* Add to Cart */}
              <div className="absolute bottom-0 left-0 w-full px-3 pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-full bg-[#944CF5] text-white flex items-center justify-center gap-2 py-2 rounded-lg shadow-lg hover:bg-[#7B2FF7] hover:scale-105 transition-all duration-300">
                  <FiShoppingCart className="text-[#FFD40C]" size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catagory2;
