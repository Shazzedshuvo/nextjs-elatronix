"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const All_Ct = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}/data/data.json`) // ✅ public ফোল্ডার থেকে সরাসরি
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-6">Loading...</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        All Categories
      </h2>
      <div>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/ct/${cat.id}`}>
            <div className=" flex gap-3"
        
            >
              {cat.image && (
                <img
                  src={cat.image}
                  alt={cat.name}
                 
                />
              )}
              <h3 className="text-base font-semibold text-gray-800 text-center">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default All_Ct;
