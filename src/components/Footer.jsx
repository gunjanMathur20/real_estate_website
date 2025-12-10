import React from "react";
import { assets } from "../assets/assets"; // Import assets like logo
import { Link } from "react-router-dom";

// Footer component for the website
export default function Footer() {
  return (
    // Main footer container
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden"
      id="Footer" // Section id for navigation
    >
      {/* Top section: logo, company links, newsletter */}
      <div className="container flex flex-col mx-auto md:flex-row justify-between items-start mb-4">
        {/* Logo and company description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="UrbanNest Logo" /> {/* Logo */}
          <p className="text-gray-400 mt-4">
            Turning your property dreams into reality. We deliver trusted,
            transparent, and tailored real estate solutions to help you find the
            perfect space. Your vision, our expertise
          </p>
        </div>

        {/* Company links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact Us
            </Link>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4 max-w-80 text-gray-400">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>

          {/* Email input and subscribe button */}
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
          />
          <button className="py-2 px-4 rounded bg-blue-500 text-white cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="border-t border-b-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 © UrbanNest | Gunjan Mathur | All Right Reserved
      </div>
    </div>
  );
}
