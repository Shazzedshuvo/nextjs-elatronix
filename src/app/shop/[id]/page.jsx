"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";
import { motion } from "framer-motion";
import CategorySection from "@/app/categories/CategorySection";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const ProductPage = () => {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [scale, setScale] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}/data/data.json`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === id.toString());
        setProduct(found);
        setMainImage(found?.images?.[0] || "/placeholder.png");

        // Related products (same category, excluding current product)
        const related = data.filter(
          (p) => p.category === found.category && p.id.toString() !== id.toString()
        );
        setRelatedProducts(related);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-center py-20 text-gray-500 text-lg">Loading product...</p>
    );
  if (!product)
    return (
      <p className="text-center py-20 text-red-500 text-lg font-semibold">
        Product not found!
      </p>
    );

  return (
    <div>
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div>
          <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-md flex items-center justify-center">
            <img
              src={mainImage}
              alt={product.name}
              className="object-contain h-full w-full"
            />
          </div>
          <div className="flex gap-4 mt-4">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={product.name}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                  mainImage === img
                    ? "border-indigo-600 scale-105"
                    : "border-transparent hover:border-gray-300 hover:scale-105"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 mb-2">Category: {product.category}</p>
          <p className="text-yellow-500 mb-2">⭐ {product.rating}</p>
          <p className="text-3xl font-semibold text-indigo-600 mb-4">
            {(product.price * quantity * scale).toFixed(2)}৳
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Quantity + Scale */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
              >
                -
              </button>
              <span className="px-4 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
              >
                +
              </button>
            </div>
            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm text-gray-600 mb-1">Scale: x{scale}</label>
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>

          {/* Add to Cart */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
            <FiShoppingCart /> Add to Cart
          </button>

          {/* Stock Availability */}
          <p className="mt-2 text-sm text-gray-600">
            {product.stock > 0
              ? `In Stock: ${product.stock} items`
              : "Out of Stock"}
          </p>
        </div>
      </div>

       {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mb-12 mt-8 ">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center cursor-pointer transition-all"
              >
                <img
                  src={item.images?.[0] || "/placeholder.png"}
                  alt={item.name}
                  className="h-32 w-full object-contain mb-2"
                />
                <h3 className="text-sm font-semibold text-gray-800 text-center line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500">{item.category}</p>
                <p className="mt-1 text-indigo-600 font-bold">{item.price}৳</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* About Section */}
      <div className="bg-white p-6 rounded-xl space-y-6 max-w-7xl mx-auto px-4 mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">About This Product</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
        {product.keyFeatures?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {product.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="list-disc list-inside text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quisquam ratione enim sed cum. Consequatur sapiente distinctio nostrum cumque magni facere sit adipisci magnam deserunt. Vel rerum est, nesciunt, accusantium obcaecati cum aliquam qui aut dicta quam odio necessitatibus eveniet aperiam. Iure vel possimus atque eaque doloremque earum modi officia est nam veniam quae delectus nulla, cumque reprehenderit accusamus doloribus nisi. Quibusdam ipsam sed repellat labore saepe nostrum eos alias, provident esse quo dolor sequi, consectetur asperiores nobis omnis magnam necessitatibus quisquam ipsa rerum tempore. Possimus quod deserunt temporibus suscipit? Minus repudiandae veritatis maiores natus impedit, dolore quidem vitae vel cupiditate, labore aliquid laborum vero animi, libero velit. Dolorum ab suscipit dignissimos voluptate nihil rem laborum at, modi exercitationem eveniet mollitia saepe sint, molestias maiores velit unde nisi minus eos nesciunt ullam ipsa nemo dicta voluptas eaque! Rem sit ducimus cupiditate debitis animi commodi blanditiis cum eos tempore laboriosam. Eligendi.</div>
      </div>

      {/* Related Products Section */}
     
      <div>
        <CategorySection></CategorySection>
      </div>
    </div>
  );
};

export default ProductPage;
