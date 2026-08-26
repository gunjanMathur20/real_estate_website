import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import TestimonialPage from "./TestimonialPage";
import ContactPage from "./ContactPage";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}

      <section
        className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/header_img.png')" }}
      >
        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-black/45"
        />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-screen items-center px-6 pt-28 sm:px-10 sm:pt-32 lg:px-16 lg:pt-30">
          <div className="mx-auto w-full max-w-7xl">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-300" />

              <span className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                Find Your Perfect Space
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="max-w-5xl text-4xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                className="block"
              >
                Find the Place
              </motion.span>

              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                className="block text-blue-300"
              >
                Your Heart Calls Home
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
                ease: "easeOut",
              }}
              className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-xl"
            >
              Because every dream deserves the right home. Discover beautiful
              spaces designed for the way you want to live.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.85,
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {/* Explore Properties */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/projects"
                  className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-600"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative">Explore Properties</span>

                  <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>

              {/* Contact */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 rounded-full border border-white/70 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-gray-900"
                >
                  <span>Contact Us</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* ================= PROPERTY SEARCH ================= */}

            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 1.05,
                ease: "easeOut",
              }}
              className="mt-10 max-w-5xl rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl sm:p-5"
            >
              {/* Search Tabs */}
              <div className="mb-4 flex gap-6 border-b border-gray-200 pb-3">
                <button
                  type="button"
                  className="border-b-2 border-blue-500 pb-2 text-sm font-semibold text-blue-600 transition"
                >
                  Buy
                </button>

                <button
                  type="button"
                  className="pb-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
                >
                  Rent
                </button>
              </div>

              {/* Search Fields */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {/* Location */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-500">
                    Location
                  </label>

                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-400"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-500">
                    Property Type
                  </label>

                  <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-400">
                    <option>Select type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>House</option>
                    <option>Office</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="mb-1 block text-xs font-medium text-gray-500">
                    Budget
                  </label>

                  <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-blue-400">
                    <option>Select budget</option>
                    <option>Under ₹50 Lakh</option>
                    <option>₹50 Lakh - ₹1 Cr</option>
                    <option>₹1 Cr - ₹2 Cr</option>
                    <option>₹2 Cr+</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full"
                  >
                    <Link
                      to="/projects"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-600"
                    >
                      <span>Search Properties</span>

                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= EXISTING SECTIONS ================= */}

      <AboutPage />

      <ProjectsPage />

      <TestimonialPage />

      <ContactPage />
    </>
  );
}
