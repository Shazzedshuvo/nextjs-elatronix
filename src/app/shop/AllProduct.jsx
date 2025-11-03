"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiHeart, FiTrash2, FiShoppingCart, FiPlus, FiMinus } from "react-icons/fi";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]); // [min, max]
  
  useEffect(() => {
    fetch(`${baseURL}/data/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data.slice(0, 8));
        const cats = [...new Set(data.map((p) => p.category))];
        setCategories(cats);

        // Automatically find min and max price
        const prices = data.map(p => p.price);
        setPriceRange([Math.min(...prices), Math.max(...prices)]);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // Filter by category and price
  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }

    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    setDisplayProducts(showAll ? filtered : filtered.slice(0, 8));
  }, [selectedCategories, priceRange, showAll, products]);

  const toggleCategory = (cat) => {
    setShowAll(false);
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-3 space-y-6 p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 border-b pb-2 mb-2">Filters</h2>

          {/* Category Checkboxes */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Categories</h3>
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2 text-sm mb-1">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="form-checkbox h-4 w-4"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>

          {/* Price Slider */}
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
            <div className="flex justify-between text-sm mb-1">
              <span>{priceRange[0]}৳</span>
              <span>{priceRange[1]}৳</span>
            </div>
            <input
              type="range"
              min={Math.min(...products.map(p => p.price)) || 0}
              max={Math.max(...products.map(p => p.price)) || 10000}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg accent-indigo-600 cursor-pointer"
            />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayProducts.map((item) => (
            <div key={item.id} className="relative group rounded-lg p-2 flex flex-col items-center shadow-sm hover:shadow-md">
              <Link href={`/shop/${item.id}`}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full flex flex-col items-center">
                  <div className="w-full h-24 flex items-center justify-center bg-gray-100 rounded mb-1">
                    <img src={item.images?.[0] || "/placeholder.png"} alt={item.name} className="object-contain h-full" />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-800 text-center line-clamp-1">{item.name}</h3>
                  <p className="text-[10px] text-gray-500">{item.category}</p>
                  <div className="mt-1 text-indigo-600 font-bold text-sm">{item.price}৳</div>
                  <div className="mt-1 text-yellow-400 font-semibold text-xs">
                    <span className="text-black">Review:</span> {item.rating.toFixed(1)}
                  </div>
                </motion.div>
              </Link>

              {/* Add to Cart */}
              <button className="mt-2 w-full bg-black text-white flex items-center justify-center gap-1 py-1 rounded hover:bg-gray-900 text-xs">
                <FiShoppingCart size={16} />
                <span>Add</span>
              </button>
            </div>
          ))}
        </div>

        {/* Show More */}
        {displayProducts.length < products.filter((p) =>
          selectedCategories.length > 0 ? selectedCategories.includes(p.category) : true
        ).length && (
          <div className="col-span-12 flex justify-center mt-4">
            <button onClick={() => setShowAll(true)} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProduct;
