import React from "react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The New Trends In Digital Media",
    description:
      "Pede voluptatum nonummy assumenda atque accumsan dolor non, purus sed…",
    image: "/articles/media-trends.jpg",
    link: "/articles/digital-media",
  },
  {
    id: 2,
    title: "Easy Life With Modern Home Appliances",
    description:
      "Pede voluptatum nonummy assumenda atque accumsan dolor non, purus sed…",
    image: "/articles/home-appliances.jpg",
    link: "/articles/home-appliances",
  },
  {
    id: 3,
    title: "Experience A New Type Of Gaming",
    description:
      "Pede voluptatum nonummy assumenda atque accumsan dolor non, purus sed…",
    image: "/articles/gaming.jpg",
    link: "/articles/gaming",
  },
  {
    id: 4,
    title: "The Best Headphones For Music",
    description:
      "Pede voluptatum nonummy assumenda atque accumsan dolor non, purus sed…",
    image: "/articles/headphones.jpg",
    link: "/articles/headphones",
  },
];

const LatestArticle = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Latest Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.link}
            className="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-3">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestArticle;
