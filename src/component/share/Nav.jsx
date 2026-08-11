import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      {/* 🔥 Offer Bar */}
      <div className="bg-orange-500 text-white text-center py-2 px-4 text-sm font-medium">
        🔥 Today Special — Get{" "}
        <span className="font-bold">20% OFF</span> on your first order!
        <span className="ml-2 underline cursor-pointer">
          Order Now →
        </span>
      </div>

      {/* Navbar */}
      <div className="navbar bg-white/95 backdrop-blur-md shadow-sm px-5 lg:px-8">

        {/* Left Side */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-52 p-3 shadow-xl"
            >
              <li>
                <a className="hover:text-orange-500">Home</a>
              </li>

              <li>
                <a className="hover:text-orange-500">Menu</a>
              </li>

              <li>
                <a className="hover:text-orange-500">
                  Offers 🔥
                </a>
              </li>

              <li>
                <a className="hover:text-orange-500">About</a>
              </li>

              <li>
                <a className="hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 ml-2"
          >
            <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center text-2xl shadow-md">
              🍽️
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-gray-900">
                Foodie
              </h1>

              <p className="text-xs text-orange-500 font-semibold">
                Restaurant
              </p>
            </div>
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">

            <li>
              <a className="font-medium hover:text-orange-500 transition">
                Home
              </a>
            </li>

            <li>
              <a className="font-medium hover:text-orange-500 transition">
                Menu
              </a>
            </li>

            <li>
              <a className="font-medium hover:text-orange-500 transition">
                Offers 🔥
              </a>
            </li>

            <li>
              <details>
                <summary className="font-medium hover:text-orange-500">
                  More
                </summary>

                <ul className="p-2 bg-white rounded-xl w-40 z-50 shadow-xl">
                  <li>
                    <a className="hover:text-orange-500">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a className="hover:text-orange-500">
                      Contact
                    </a>
                  </li>
                </ul>
              </details>
            </li>

          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex items-center gap-3">

          {/* Cart */}
          <button className="hidden sm:flex relative w-11 h-11 rounded-full bg-gray-100 items-center justify-center hover:bg-orange-100 transition">
            🛒

            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Login */}
          <Link
            href="/auth/signin"
            className="hidden sm:block rounded-full border-2 border-orange-500 px-5 py-2.5 text-sm font-semibold text-orange-500 transition hover:bg-orange-50"
          >
            Login
          </Link>

          {/* Register */}
          <Link
            href="/auth/signup"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 hover:scale-105"
          >
            Register
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Nav;