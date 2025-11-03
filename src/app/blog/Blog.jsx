"use client";
import React from "react";

const Blog = () => {
  const brands = [
    "Asus",
    "Lenovo",
    "Dell",
    "HP",
    "Acer",
    "Apple",
    "Intel",
    "AMD",
    "Epson",
    "LG",
    "Hikvision",
    "Cisco",
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-center text-white">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Global Brand IT Solutions"
          className="w-full h-[400px] object-cover brightness-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Brand (Pvt) Limited
          </h1>
          <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
            At <strong>Global Brand</strong>, our commitment lies in creating
            strong partnerships that lead to extraordinary business success. We
            believe in collaboration and strive to make every commitment
            meaningful.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Overview</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
          Global Brand specializes in a vast range of cutting-edge IT products
          and solutions — from top-tier desktops, notebooks, and gaming
          accessories to advanced networking and cybersecurity solutions.
          Through years of dedication, we’ve become one of Bangladesh’s leading
          distributors for renowned global brands.
        </p>
      </section>

      {/* Brands */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">
          Explore Our Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200"
            >
              <img
                src={`https://logo.clearbit.com/${brand.toLowerCase()}.com`}
                alt={brand}
                className="w-16 h-16 object-contain mb-2"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/80?text=" + brand)
                }
              />
              <p className="font-medium text-gray-700">{brand}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">
          What Our Partners Say
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-3">
              ⭐⭐⭐⭐⭐ “Global Brand has been our trusted partner for years. Their
              efficiency, authenticity, and after-sales support are unmatched in
              the industry.”
            </p>
            <h4 className="font-semibold text-gray-800">– Tech World BD</h4>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-3">
              ⭐⭐⭐⭐⭐ “A reliable distribution network with premium products and
              timely service. Highly recommended for businesses in Bangladesh.”
            </p>
            <h4 className="font-semibold text-gray-800">– Digital Empire Ltd.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
