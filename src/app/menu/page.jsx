"use client";

import React, { useState } from "react";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Burger",
    "Pizza",
    "Chicken",
    "Pasta",
    "Salad",
    "Drinks",
  ];

  const foods = [
    {
      id: 1,
      name: "Classic Cheese Burger",
      category: "Burger",
      price: 12.99,
      oldPrice: 16.99,
      rating: 4.9,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      popular: true,
    },
    {
      id: 2,
      name: "Double Beef Burger",
      category: "Burger",
      price: 14.99,
      oldPrice: 18.99,
      rating: 4.8,
      reviews: 95,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349",
      popular: false,
    },
    {
      id: 3,
      name: "Italian Cheese Pizza",
      category: "Pizza",
      price: 15.99,
      oldPrice: 20.99,
      rating: 4.9,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      popular: true,
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      category: "Pizza",
      price: 17.99,
      oldPrice: 21.99,
      rating: 4.8,
      reviews: 110,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      popular: false,
    },
    {
      id: 5,
      name: "Crispy Fried Chicken",
      category: "Chicken",
      price: 13.99,
      oldPrice: 17.99,
      rating: 4.9,
      reviews: 187,
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
      popular: true,
    },
    {
      id: 6,
      name: "Grilled Chicken",
      category: "Chicken",
      price: 16.99,
      oldPrice: 19.99,
      rating: 4.7,
      reviews: 84,
      image:
        "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
      popular: false,
    },
    {
      id: 7,
      name: "Creamy Alfredo Pasta",
      category: "Pasta",
      price: 11.99,
      oldPrice: 15.99,
      rating: 4.8,
      reviews: 97,
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
      popular: true,
    },
    {
      id: 8,
      name: "Fresh Garden Salad",
      category: "Salad",
      price: 9.99,
      oldPrice: 12.99,
      rating: 4.6,
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
      popular: false,
    },
    {
      id: 9,
      name: "Fresh Orange Juice",
      category: "Drinks",
      price: 5.99,
      oldPrice: 7.99,
      rating: 4.8,
      reviews: 73,
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423",
      popular: false,
    },
    {
      id: 10,
      name: "Strawberry Milkshake",
      category: "Drinks",
      price: 6.99,
      oldPrice: 8.99,
      rating: 4.9,
      reviews: 102,
      image:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
      popular: true,
    },
  ];

  const filteredFoods = foods.filter((food) => {
    const categoryMatch =
      activeCategory === "All" || food.category === activeCategory;

    const searchMatch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-orange-50">

      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
            🍽️ Foodie Restaurant
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Our Delicious Menu
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Discover our delicious selection of freshly prepared meals,
            made with love and the finest ingredients.
          </p>

        </div>
      </section>

      {/* Menu */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* Search */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">

            <input
              type="text"
              placeholder="Search your favorite food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-full py-4 pl-12 pr-5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 shadow-sm"
            />

            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>

          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-3 justify-start md:justify-center">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full font-semibold transition ${
                activeCategory === category
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                  : "bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-500"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* Title */}
        <div className="flex justify-between items-center mt-10 mb-6">

          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {activeCategory === "All"
                ? "All Foods"
                : activeCategory}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {filteredFoods.length} delicious items available
            </p>
          </div>

          <span className="hidden sm:block text-sm text-gray-400">
            Fresh • Tasty • Delicious
          </span>

        </div>

        {/* Food Cards */}
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredFoods.map((food) => (
              <div
                key={food.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-56 overflow-hidden">

                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    20% OFF
                  </span>

                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-xl hover:bg-orange-500 hover:text-white transition">
                    ♡
                  </button>

                  {food.popular && (
                    <span className="absolute bottom-4 left-4 bg-gray-900/80 text-white text-xs px-3 py-1.5 rounded-full">
                      🔥 Popular
                    </span>
                  )}

                </div>

                {/* Content */}
                <div className="p-5">

                  <p className="text-xs uppercase font-bold text-orange-500">
                    {food.category}
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    {food.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-yellow-400">
                      ★
                    </span>

                    <span className="font-semibold text-gray-700">
                      {food.rating}
                    </span>

                    <span className="text-sm text-gray-400">
                      ({food.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-5">

                    <div>
                      <span className="text-xl font-extrabold text-orange-500">
                        ${food.price}
                      </span>

                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${food.oldPrice}
                      </span>
                    </div>

                    <button className="w-11 h-11 rounded-full bg-orange-500 text-white text-xl font-bold hover:bg-orange-600 hover:scale-110 transition shadow-md">
                      +
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <div className="text-center bg-white rounded-3xl py-20 shadow-sm">

            <div className="text-6xl mb-4">
              🍽️
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              No Food Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try searching for another food or category.
            </p>

          </div>
        )}

      </section>
    </div>
  );
};

export default Menu;