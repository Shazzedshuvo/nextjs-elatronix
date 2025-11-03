"use client";

import { categories } from "../../../public/categorie/categories";
import { motion } from "framer-motion";
import Link from "next/link";

const CategorySection = () => {
  // শুধু 9টা category দেখাবো
  const displayedCategories = categories.slice(0, 9);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 overflow-x-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>

      {/* Motion Carousel */}
      <motion.div
        className="flex gap-6"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }} // adjust width as needed
        whileTap={{ cursor: "grabbing" }}
        initial={{ x: 0 }}
        animate={{ x: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        {displayedCategories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.id}`} // details page path
            className="min-w-[200px]"
          >
            <motion.div
              className="bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-24 h-24 object-contain mb-3"
              />
              <p className="text-lg font-semibold text-center">{cat.name}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default CategorySection;
