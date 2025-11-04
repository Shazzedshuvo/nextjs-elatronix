"use client";

import { categories } from "../../../public/categorie/categories";
import { motion } from "framer-motion";
import Link from "next/link";

const CategorySection = () => {
  // শুধু 9টা category দেখাবো
  const displayedCategories = categories.slice(0, 9);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Categories
      </h2>

      {/* Motion Carousel */}
      <motion.div
        className="flex gap-6 overflow-x-scroll scrollbar-hide py-2"
        drag="x"
        dragConstraints={{ left: -1200, right: 0 }} // adjust width as needed
        whileTap={{ cursor: "grabbing" }}
      >
        {displayedCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.id}`}
            className="min-w-[180px] sm:min-w-[200px]"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-24 h-24 object-contain mb-3"
              />
              <p className="text-lg font-semibold text-center text-gray-700">
                {cat.name}
              </p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default CategorySection;
