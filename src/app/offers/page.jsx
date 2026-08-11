"use client";

import React from "react";
import Link from "next/link";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Weekend Family Feast",
      description:
        "Enjoy a delicious family meal with burger, pizza, fries and drinks.",
      discount: "30% OFF",
      price: "$29.99",
      oldPrice: "$42.99",
      code: "WEEKEND30",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554",
      tag: "🔥 Most Popular",
    },
    {
      id: 2,
      title: "Pizza Party Combo",
      description:
        "Get 2 large pizzas with crispy fries and refreshing drinks.",
      discount: "25% OFF",
      price: "$24.99",
      oldPrice: "$33.99",
      code: "PIZZA25",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
      tag: "🍕 Pizza Deal",
    },
    {
      id: 3,
      title: "Burger Lover Combo",
      description:
        "Two juicy burgers with fries and cold drinks at a special price.",
      discount: "20% OFF",
      price: "$19.99",
      oldPrice: "$26.99",
      code: "BURGER20",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      tag: "🍔 Burger Deal",
    },
    {
      id: 4,
      title: "Chicken Feast",
      description:
        "Crispy chicken, fries, sauces and drinks for the perfect meal.",
      discount: "35% OFF",
      price: "$21.99",
      oldPrice: "$33.99",
      code: "CHICKEN35",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
      tag: "🍗 Special Deal",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
            🎁 Special Offers
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Delicious Deals For You
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-7">
            Save more and enjoy more! Grab our limited-time restaurant
            offers before they are gone.
          </p>

        </div>

      </section>

      {/* Main Offers */}
      <section className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Banner */}
        <div className="relative overflow-hidden bg-orange-500 rounded-[2rem] p-8 md:p-10 mb-12">

          <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-7">

            <div className="text-white">

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-bold">
                🔥 LIMITED TIME
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
                Get 20% OFF Your First Order
              </h2>

              <p className="text-orange-100 mt-2">
                Use coupon code{" "}
                <span className="font-extrabold">
                  FOODIE20
                </span>{" "}
                at checkout.
              </p>

            </div>

            <Link
              href="/menu"
              className="shrink-0 bg-white text-orange-500 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition"
            >
              Order Now →
            </Link>

          </div>

        </div>

        {/* Section Heading */}
        <div className="mb-8">

          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
            💥 Today's Deals
          </span>

          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Grab Your Favorite Offer
          </h2>

        </div>

        {/* Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >

              <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* Image */}
                <div className="relative h-64 sm:h-full min-h-[300px] overflow-hidden">

                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {offer.discount}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-gray-900/80 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    {offer.tag}
                  </div>

                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">

                  <p className="text-orange-500 text-sm font-bold">
                    SPECIAL COMBO
                  </p>

                  <h3 className="text-2xl font-extrabold text-gray-900 mt-2">
                    {offer.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6 mt-3">
                    {offer.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-3 mt-5">

                    <span className="text-2xl font-extrabold text-orange-500">
                      {offer.price}
                    </span>

                    <span className="text-gray-400 line-through">
                      {offer.oldPrice}
                    </span>

                  </div>

                  {/* Coupon */}
                  <div className="flex items-center justify-between bg-orange-50 border border-dashed border-orange-200 rounded-xl px-4 py-3 mt-5">

                    <div>
                      <p className="text-xs text-gray-400">
                        COUPON CODE
                      </p>

                      <p className="font-extrabold text-gray-900">
                        {offer.code}
                      </p>
                    </div>

                    <span className="text-orange-500 text-xl">
                      🎟️
                    </span>

                  </div>

                  {/* Button */}
                  <Link
                    href="/menu"
                    className="mt-5 text-center bg-gray-900 text-white py-3 rounded-full font-bold hover:bg-orange-500 transition"
                  >
                    Order This Deal →
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl">
              🚚
            </div>

            <h3 className="font-bold text-gray-900 mt-3">
              Fast Delivery
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Fresh food delivered quickly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl">
              💳
            </div>

            <h3 className="font-bold text-gray-900 mt-3">
              Easy Payment
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Safe and convenient payment.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl">
              ❤️
            </div>

            <h3 className="font-bold text-gray-900 mt-3">
              Customer Favorite
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Loved by thousands of customers.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Offers;