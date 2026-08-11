import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Sarah Ahmed",
      role: "Regular Customer",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=47",
      review:
        "The food was absolutely delicious! Everything was fresh, hot and perfectly prepared. I will definitely order again.",
    },
    {
      name: "Mohammed Ali",
      role: "Happy Customer",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
      review:
        "Amazing taste and very fast delivery. The burger was one of the best I have ever tried. Highly recommended!",
    },
    {
      name: "Emily Wilson",
      role: "Food Lover",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32",
      review:
        "Beautiful restaurant and excellent service. The pizza was fresh, cheesy and full of flavor. Loved it!",
    },
  ];

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
            ⭐ Customer Love
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            What Our Customers Say
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            Thousands of customers love our food and service.
            Here is what some of them have to say.
          </p>

        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-orange-50 rounded-3xl p-7 border border-orange-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Quote */}
              <div className="flex justify-between items-start">

                <div className="text-5xl text-orange-300 font-serif leading-none">
                  “
                </div>

                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-400 text-lg"
                    >
                      ★
                    </span>
                  ))}
                </div>

              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-7 mt-3">
                {review.review}
              </p>

              {/* Customer */}
              <div className="flex items-center gap-4 mt-7">

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-md"
                />

                <div>
                  <h3 className="font-bold text-gray-900">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
              ⭐
            </div>

            <div>
              <p className="text-2xl font-extrabold text-gray-900">
                4.9 / 5
              </p>

              <p className="text-sm text-gray-500">
                Based on 2,500+ reviews
              </p>
            </div>

          </div>

          <div className="hidden sm:block h-10 w-px bg-gray-200"></div>

          <p className="text-gray-500 text-sm text-center">
            ❤️ Loved by thousands of food lovers
          </p>

        </div>

      </div>

    </section>
  );
};

export default CustomerReviews;