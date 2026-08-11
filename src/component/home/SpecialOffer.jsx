import React from "react";
import Link from "next/link";

const SpecialOffer = () => {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[2rem] bg-gray-900 min-h-[360px] flex items-center">

          {/* Background Decoration */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 w-full items-center">

            {/* Left */}
            <div className="p-8 md:p-12 lg:p-14">

              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-5">
                🔥 LIMITED TIME OFFER
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Weekend
                <span className="text-orange-500"> Special </span>
                Deal!
              </h2>

              <p className="text-gray-400 mt-4 max-w-lg leading-7">
                Treat yourself and your loved ones with our special
                weekend family meal. Delicious food at an amazing price.
              </p>

              {/* Discount */}
              <div className="flex items-center gap-4 mt-6">

                <div className="bg-orange-500 text-white rounded-2xl px-5 py-3 text-center">
                  <p className="text-3xl font-extrabold">
                    30%
                  </p>
                  <p className="text-xs font-semibold">
                    OFF
                  </p>
                </div>

                <div>
                  <p className="text-white font-bold">
                    Family Meal Combo
                  </p>

                  <p className="text-gray-500 text-sm">
                    Burger + Pizza + Drinks + Fries
                  </p>
                </div>

              </div>

              {/* Button */}
              <Link
                href="/offers"
                className="inline-flex items-center gap-2 mt-7 bg-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:scale-105 transition"
              >
                Grab This Deal
                <span>→</span>
              </Link>

            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[300px] lg:min-h-[360px]">

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554"
                alt="Special Family Meal"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/30 to-transparent"></div>

              {/* Floating Offer */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-2xl px-5 py-4 rotate-6">

                <p className="text-xs text-gray-500 font-semibold">
                  USE CODE
                </p>

                <p className="text-xl font-extrabold text-orange-500">
                  WEEKEND30
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SpecialOffer;