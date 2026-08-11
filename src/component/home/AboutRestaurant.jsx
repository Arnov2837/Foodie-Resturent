import React from "react";
import Link from "next/link";

const AboutRestaurant = () => {
  return (
    <section className="py-20 bg-orange-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Images */}
          <div className="relative">

            {/* Main Image */}
            <div className="rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                alt="Foodie Restaurant"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-3 md:right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                👨‍🍳
              </div>

              <div>
                <p className="text-2xl font-extrabold text-orange-500">
                  10+
                </p>

                <p className="text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

            </div>

            {/* Small Floating Card */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-5 py-3">

              <p className="text-xs text-gray-500">
                Since
              </p>

              <p className="font-extrabold text-gray-900">
                2016
              </p>

            </div>

          </div>

          {/* Right Side - Content */}
          <div>

            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
              🍽️ About Foodie
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mt-3">
              We Make Every Meal
              <span className="text-orange-500"> Special</span>
            </h2>

            <p className="text-gray-600 leading-7 mt-5">
              Welcome to Foodie Restaurant, where great food meets
              unforgettable experiences. We believe that every meal
              should be fresh, flavorful and made with love.
            </p>

            <p className="text-gray-500 leading-7 mt-4">
              From our kitchen to your table, our expert chefs use
              carefully selected ingredients to create delicious meals
              that bring people together.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  🥘
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Fresh Ingredients
                  </p>
                  <p className="text-xs text-gray-500">
                    Always fresh & healthy
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  👨‍🍳
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Expert Chefs
                  </p>
                  <p className="text-xs text-gray-500">
                    Made by professionals
                  </p>
                </div>
              </div>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8 pt-7 border-t border-orange-200">

              <div>
                <p className="text-2xl font-extrabold text-orange-500">
                  10K+
                </p>

                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-orange-500">
                  50+
                </p>

                <p className="text-sm text-gray-500">
                  Food Items
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold text-orange-500">
                  4.9
                </p>

                <p className="text-sm text-gray-500">
                  Rating
                </p>
              </div>

            </div>

            {/* Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 bg-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition"
            >
              Learn More
              <span>→</span>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutRestaurant;