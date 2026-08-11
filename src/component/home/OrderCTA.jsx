import React from "react";
import Link from "next/link";

const OrderCTA = () => {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[2rem] bg-orange-500">

          {/* Background Decorations */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10"></div>

          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white/10"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-14 text-white">

              <span className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                🍕 Hungry Already?
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-5">
                Your Favorite Food
                <br />
                Is Just One Click Away!
              </h2>

              <p className="text-orange-100 mt-5 max-w-lg leading-7">
                Don't wait! Choose your favorite meal, place your order
                and enjoy delicious food delivered fresh to your door.
              </p>

              {/* Offer */}
              <div className="flex items-center gap-4 mt-7">

                <div className="bg-white text-orange-500 rounded-2xl px-5 py-3 text-center shadow-lg">
                  <p className="text-2xl font-extrabold">
                    20%
                  </p>

                  <p className="text-xs font-bold">
                    OFF
                  </p>
                </div>

                <div>
                  <p className="font-bold">
                    First Order Special
                  </p>

                  <p className="text-orange-100 text-sm">
                    Use code: FOODIE20
                  </p>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <Link
                  href="/menu"
                  className="bg-white text-orange-500 px-7 py-3.5 rounded-full font-bold shadow-xl hover:bg-orange-50 hover:scale-105 transition"
                >
                  🍽️ Order Now
                </Link>

                <Link
                  href="/menu"
                  className="border-2 border-white/70 text-white px-7 py-3.5 rounded-full font-bold hover:bg-white hover:text-orange-500 transition"
                >
                  View Menu →
                </Link>

              </div>

            </div>

            {/* Right Side */}
            <div className="relative h-[350px] lg:h-[420px]">

              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                alt="Delicious Food"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-500/30 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-8 right-6 md:right-10 bg-white rounded-2xl shadow-2xl px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-xl">
                    🚚
                  </div>

                  <div>
                    <p className="font-bold text-gray-900">
                      Fast Delivery
                    </p>

                    <p className="text-xs text-gray-500">
                      Within 30 minutes
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OrderCTA;