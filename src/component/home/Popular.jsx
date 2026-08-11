import React from "react";
import Link from "next/link";

const Popular = () => {
  const categories = [
    {
      name: "Burger",
      icon: "🍔",
      items: "12 Items",
      bg: "bg-orange-100",
    },
    {
      name: "Pizza",
      icon: "🍕",
      items: "18 Items",
      bg: "bg-red-100",
    },
    {
      name: "Chicken",
      icon: "🍗",
      items: "10 Items",
      bg: "bg-yellow-100",
    },
    {
      name: "Pasta",
      icon: "🍝",
      items: "14 Items",
      bg: "bg-green-100",
    },
    {
      name: "Salad",
      icon: "🥗",
      items: "08 Items",
      bg: "bg-emerald-100",
    },
    {
      name: "Drinks",
      icon: "🥤",
      items: "15 Items",
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="bg-white py-16">

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">

          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
              Explore Menu
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Popular Categories
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl">
              Explore our most popular food categories and discover
              something delicious for every craving.
            </p>
          </div>

          <Link
            href="/menu"
            className="text-orange-500 font-semibold hover:text-orange-600 transition"
          >
            View All Menu →
          </Link>

        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

          {categories.map((category, index) => (
            <Link
              href="/menu"
              key={index}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-3xl p-5 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                {/* Icon */}
                <div
                  className={`w-20 h-20 mx-auto ${category.bg} rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition duration-300`}
                >
                  {category.icon}
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-800 mt-4 group-hover:text-orange-500 transition">
                  {category.name}
                </h3>

                {/* Items */}
                <p className="text-sm text-gray-400 mt-1">
                  {category.items}
                </p>

              </div>
            </Link>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Popular;