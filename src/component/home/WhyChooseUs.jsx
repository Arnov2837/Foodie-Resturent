import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🥘",
      title: "Fresh Ingredients",
      description:
        "We use fresh and high-quality ingredients to prepare every meal.",
      bg: "bg-orange-100",
    },
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description:
        "Our experienced chefs prepare delicious food with passion and care.",
      bg: "bg-yellow-100",
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description:
        "Get your favorite meals delivered fresh and hot within 30 minutes.",
      bg: "bg-green-100",
    },
    {
      icon: "⭐",
      title: "Best Quality",
      description:
        "We always focus on great taste, quality service and customer satisfaction.",
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="py-16 bg-orange-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
            Why Foodie?
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Why Choose Us?
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            We are committed to serving delicious food with fresh
            ingredients and excellent service.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-7 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto ${feature.bg} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-3 transition duration-300`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mt-5">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-6 mt-3">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="mt-12 bg-gray-900 rounded-3xl p-7 md:p-9">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>
              <h3 className="text-3xl font-extrabold text-orange-500">
                10K+
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-orange-500">
                50+
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Delicious Dishes
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-orange-500">
                4.9
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Customer Rating
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-orange-500">
                30 Min
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Fast Delivery
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;