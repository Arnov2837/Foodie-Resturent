import React from "react";
import Link from "next/link";

const TodaysSpecial = () => {
  const foods = [
    {
      name: "Classic Cheese Burger",
      category: "Burger",
      price: "12.99",
      oldPrice: "16.99",
      rating: "4.9",
      reviews: "120",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Italian Cheese Pizza",
      category: "Pizza",
      price: "15.99",
      oldPrice: "20.99",
      rating: "4.8",
      reviews: "98",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    },
    {
      name: "Crispy Fried Chicken",
      category: "Chicken",
      price: "13.99",
      oldPrice: "17.99",
      rating: "4.9",
      reviews: "156",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    },
    {
      name: "Creamy Alfredo Pasta",
      category: "Pasta",
      price: "11.99",
      oldPrice: "15.99",
      rating: "4.7",
      reviews: "87",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    },
  ];

  return (
    <section className="bg-orange-50 py-16">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">

          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
              🔥 Don't Miss Out
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Today's Special
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl">
              Enjoy our chef's special dishes with amazing discounts.
              Fresh, delicious and made just for you.
            </p>
          </div>

          <Link
            href="/menu"
            className="text-orange-500 font-semibold hover:text-orange-600 transition"
          >
            View Full Menu →
          </Link>

        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {foods.map((food, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Discount */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  20% OFF
                </div>

                {/* Favorite */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-lg hover:bg-orange-500 hover:text-white transition">
                  ♡
                </button>

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Category */}
                <p className="text-xs font-semibold text-orange-500 uppercase">
                  {food.category}
                </p>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mt-1 line-clamp-1">
                  {food.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-yellow-500">
                    ★
                  </span>

                  <span className="font-semibold text-gray-700">
                    {food.rating}
                  </span>

                  <span className="text-sm text-gray-400">
                    ({food.reviews})
                  </span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-5">

                  <div>
                    <span className="text-xl font-extrabold text-orange-500">
                      ${food.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${food.oldPrice}
                    </span>
                  </div>

                  <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition shadow-md">
                    +
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-orange-500 transition"
          >
            🍽️ Explore All Foods
            <span>→</span>
          </Link>
        </div>

      </div>

    </section>
  );
};

export default TodaysSpecial;