"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // next/navigation থেকে params
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import CategorySection from "@/app/categories/CategorySection";
import Catagory2 from "../Catagory2";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const ProductPage = () => {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}/data/data.json`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === id.toString());
        setProduct(found);
        setMainImage(found?.images?.[0] || "/placeholder.png");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-20">Loading...</p>;
  if (!product)
    return <p className="text-center py-20 text-red-500">Product not found!</p>;

  return (
    <div>
      {" "}
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
                className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
                  mainImage === img
                    ? "border-indigo-600"
                    : "border-transparent hover:border-gray-300"
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
          <ul className="list-disc pl-5 mb-6 text-gray-600">
            {product.keyFeatures?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* Quantity + Scale */}
          <div className="flex items-center gap-6 mb-6">
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

            <div className="flex flex-col w-1/2">
              <label className="text-sm text-gray-600 mb-1">
                Scale: x{scale}
              </label>
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

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
            <FiShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl space-y-6">
  {/* Product Name */}
  <h1 className="text-4xl font-extrabold text-gray-900"> About This product </h1>
  <h1 className="text-2xl font-extrabold text-gray-400">{product.name}</h1>

  {/* Description */}
  <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

  {/* Key Features */}
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

  {/* Extended Info */}
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-2">More Information:</h2>
    <p className="text-gray-700 text-base leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, numquam corrupti! Autem exercitationem ipsum voluptatem tenetur in tempore doloribus, nisi, obcaecati, rem eligendi deserunt explicabo veritatis consectetur necessitatibus dolorum laboriosam repudiandae nihil suscipit! Beatae ab aut atque minima, error excepturi quidem repellendus magnam neque aperiam cupiditate qui reprehenderit repudiandae animi, mollitia nostrum similique? Officiis aliquam, deserunt temporibus corrupti incidunt maiores eligendi unde libero consequatur hic animi iusto reprehenderit assumenda enim odio fugiat dignissimos qui consectetur distinctio alias quia et. Ab porro eaque laborum, fugiat mollitia repudiandae magnam reiciendis blanditiis optio quod delectus beatae voluptatem dolorum sapiente excepturi officiis nam ducimus nemo perferendis deserunt in maiores facere tenetur? Rerum quibusdam culpa optio error molestiae magnam facilis eos mollitia pariatur veniam officiis possimus alias magni placeat, praesentium quas dolore? Inventore, saepe, dolore impedit vero corporis ex neque vitae ipsum et, adipisci dolorem unde! Excepturi, sint autem? Ipsum, commodi deleniti ad expedita voluptatum reiciendis illo, ut facilis officiis eos soluta ullam dicta a doloribus consectetur! Dolorum incidunt dignissimos, possimus optio delectus eveniet natus numquam exercitationem illo neque. Quisquam saepe aperiam tempore incidunt hic minima delectus odit, culpa dolor deleniti doloremque quae possimus facere libero qui voluptas facilis explicabo sapiente velit illum repudiandae. Voluptatem et inventore quod eum, distinctio laborum. Quidem rem nobis ullam veritatis vel omnis reiciendis fuga saepe vitae mollitia est nulla hic maiores laborum, ducimus molestias vero, officia inventore officiis nesciunt? Ipsam laborum est similique possimus quia voluptates voluptatem ducimus, doloremque ipsa cumque, in praesentium natus dolor, voluptas fuga? Aperiam, quis.
    </p>
  </div>
</div>

      <div>
        <CategorySection></CategorySection>
      </div>
      <div>
        <Catagory2></Catagory2>
      </div>
    </div>
  );
};

export default ProductPage;
