import React from "react";
import Link from "next/link";

const Hader = () => {
  return (
    <section className="bg-orange-50">

      {/* Hero Slider */}
      <div className="relative overflow-hidden">

        {/* Background */}
        <div className="min-h-[500px] lg:min-h-[580px] flex items-center">

          <div className="max-w-7xl mx-auto w-full px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Left Content */}
              <div className="text-center lg:text-left">

                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-5">
                  <span className="text-orange-500">🔥</span>
                  <span className="text-sm font-semibold text-gray-700">
                    Special Offer — 20% OFF
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                  Taste the
                  <span className="text-orange-500"> Happiness </span>
                  in Every Bite 🍔
                </h1>

                <p className="mt-5 text-gray-600 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-7">
                  Fresh ingredients, delicious recipes and unforgettable
                  flavors. Enjoy your favorite meals with your loved ones.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

                  <Link
                    href="/menu"
                    className="px-7 py-3.5 rounded-full bg-orange-500 text-white font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition"
                  >
                    🍽️ Explore Menu
                  </Link>

                  <Link
                    href="/offers"
                    className="px-7 py-3.5 rounded-full bg-white text-orange-500 font-bold border border-orange-200 hover:bg-orange-50 transition"
                  >
                    🔥 View Offers
                  </Link>

                </div>

                {/* Small Info */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm">

                  <div className="flex items-center gap-2">
                    <span className="text-xl">⭐</span>
                    <div>
                      <p className="font-bold text-gray-800">4.9/5</p>
                      <p className="text-gray-500">Customer Rating</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xl">🚚</span>
                    <div>
                      <p className="font-bold text-gray-800">30 Min</p>
                      <p className="text-gray-500">Fast Delivery</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Food Image */}
              <div className="relative flex justify-center">

                {/* Main Circle */}
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[470px] lg:h-[470px] rounded-full bg-orange-200 flex items-center justify-center">

                  <img
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                    alt="Delicious Pizza"
                    className="w-[270px] h-[270px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full object-cover shadow-2xl"
                  />

                </div>

                {/* Discount Badge */}
                <div className="absolute top-5 right-5 lg:right-0 bg-white w-24 h-24 rounded-full shadow-xl flex flex-col items-center justify-center rotate-12">
                  <span className="text-orange-500 text-2xl font-extrabold">
                    20%
                  </span>
                  <span className="text-xs font-bold text-gray-600">
                    OFF
                  </span>
                </div>

                {/* Floating Price */}
                <div className="absolute bottom-5 left-5 lg:left-0 bg-white rounded-2xl shadow-xl px-5 py-3">
                  <p className="text-xs text-gray-500">
                    Today's Special
                  </p>

                  <p className="text-xl font-extrabold text-orange-500">
                    $12.99
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          <span className="w-8 h-2 rounded-full bg-orange-500"></span>
          <span className="w-2 h-2 rounded-full bg-orange-200"></span>
          <span className="w-2 h-2 rounded-full bg-orange-200"></span>
        </div>

      </div>

      {/* Small Feature Boxes */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 -mb-10 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {/* Box 1 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl mb-3">
              🍕
            </div>

            <h3 className="font-bold text-gray-900">
              Fresh Food
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Fresh ingredients
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl mb-3">
              🚚
            </div>

            <h3 className="font-bold text-gray-900">
              Fast Delivery
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Within 30 minutes
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-2xl mb-3">
              ⭐
            </div>

            <h3 className="font-bold text-gray-900">
              Top Rated
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              4.9 customer rating
            </p>
          </div>

          {/* Box 4 */}
          <div className="bg-white rounded-2xl p-5 shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-2xl mb-3">
              🔥
            </div>

            <h3 className="font-bold text-gray-900">
              Best Offers
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Save more today
            </p>
          </div>

        </div>
      </div>

      {/* Space after boxes */}
      <div className="h-20"></div>

    </section>
  );
};

export default Hader;