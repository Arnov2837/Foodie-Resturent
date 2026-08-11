"use client"


const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Restaurant Info */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500">
              🍽️ Foodie Restaurant
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Delicious food, fresh ingredients and unforgettable
              dining experiences. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-500 cursor-pointer">
                Home
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Menu
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-orange-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Opening Hours
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Saturday - Thursday</p>
              <p className="text-white font-medium">
                10:00 AM - 11:00 PM
              </p>

              <p>Friday</p>
              <p className="text-white font-medium">
                02:00 PM - 11:30 PM
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Riyadh, Saudi Arabia</p>
              <p>📞 +966 50 123 4567</p>
              <p>✉️ info@foodierestaurant.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition">
                f
              </button>

              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition">
                𝕏
              </button>

              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 transition">
                ◎
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>
            © 2026 Foodie Restaurant. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="hover:text-orange-500 cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-orange-500 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>

      </div>
    </footer>
    </div>
  );
};

export default Footer;