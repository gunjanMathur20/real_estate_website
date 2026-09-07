
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Building2,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { assets, projectsData } from "../assets/assets";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  // =====================================================
  // STATE
  // =====================================================

  // Stores the current horizontal position of the project slider.
  // The value is represented as a percentage.
  const [offset, setOffset] = useState(0);

  // Determines how many property cards should be visible
  // depending on the current screen width.
  //
  // Desktop  → 4 cards
  // Tablet   → 2 cards
  // Mobile   → 1 card
  const [cardsToShow, setCardsToShow] = useState(1);

  // =====================================================
  // RESPONSIVE SLIDER
  // =====================================================

  useEffect(() => {
    // Function that checks the browser width and determines
    // how many cards should be displayed.
    const updateCardsToShow = () => {
      // Large desktop screens
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      }

      // Tablet screens
      else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      }

      // Small/mobile screens
      else {
        setCardsToShow(1);
      }
    };

    // Run once when the component loads.
    updateCardsToShow();

    // Update the number of visible cards whenever
    // the browser window is resized.
    window.addEventListener("resize", updateCardsToShow);

    // Remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  // =====================================================
  // RESET SLIDER POSITION
  // =====================================================

  // Whenever the number of visible cards changes
  // (for example, desktop → mobile), reset the slider
  // back to the first project.
  useEffect(() => {
    setOffset(0);
  }, [cardsToShow]);

  // =====================================================
  // SLIDER CALCULATIONS
  // =====================================================

  // Calculate how much the slider should move
  // for every next/previous action.
  //
  // Example:
  // 4 cards → 25% movement
  // 2 cards → 50% movement
  // 1 card  → 100% movement
  const slidePercentage = 100 / cardsToShow;

  // Calculate the maximum amount the slider can move.
  //
  // Math.max() prevents maxOffset from becoming negative
  // when there are fewer projects than visible cards.
  const maxOffset = Math.max(
    (projectsData.length - cardsToShow) * slidePercentage,
    0,
  );

  // =====================================================
  // NEXT PROJECT
  // =====================================================

  const showNextProject = () => {
    setOffset((prev) =>
      // Stop moving when the slider reaches the end.
      prev >= maxOffset ? prev : prev + slidePercentage,
    );
  };

  // =====================================================
  // PREVIOUS PROJECT
  // =====================================================

  const showPrevProject = () => {
    setOffset((prev) =>
      // Stop moving when the slider reaches the beginning.
      prev <= 0 ? prev : prev - slidePercentage,
    );
  };

  // =====================================================
  // PAGE UI
  // =====================================================

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      {/* =====================================================
          BACKGROUND DECORATIVE ELEMENTS
          These blurred circles add subtle visual depth
          without affecting the page functionality.
      ====================================================== */}

      {/* Blue decorative glow - top right */}
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      {/* Gray decorative glow - bottom left */}
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      {/* =====================================================
          MAIN CONTENT CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          // Initial animation state
          initial={{ opacity: 0, y: 30 }}
          // Animation state when the section enters the viewport
          whileInView={{ opacity: 1, y: 0 }}
          // Animation will run only once
          viewport={{ once: true, amount: 0.2 }}
          // Animation duration
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* =====================================================
              HEADER TEXT
          ====================================================== */}

          <div className="max-w-3xl">
            {/* Small section label */}
            <div className="mb-5 flex items-center gap-3">
              {/* Decorative line */}
              <span className="h-px w-12 bg-blue-500" />

              {/* Label text */}
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
                Selected Properties
              </span>
            </div>

            {/* Main section heading */}
            <h2 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#14233B] sm:text-5xl lg:text-[64px]">
              Spaces designed
              <br />
              {/* Secondary heading text */}
              <span className="font-normal text-gray-400">
                for the way you live.
              </span>
            </h2>

            {/* Section description */}
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-gray-500 sm:text-base">
              Discover thoughtfully designed residences where contemporary
              architecture meets everyday comfort. Explore our collection of
              properties selected for quality, character, and long-term value.
            </p>
          </div>

          {/* =====================================================
              SLIDER NAVIGATION
          ====================================================== */}

          <div className="flex items-end justify-between gap-8">
            {/* Property counter - hidden on smaller screens */}
            <div className="hidden lg:block">
              {/* Number of projects */}
              <p className="text-3xl font-semibold tracking-tight text-[#14233B]">
                {String(projectsData.length).padStart(2, "0")}
              </p>

              {/* Counter label */}
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Featured Properties
              </p>
            </div>

            {/* Previous / Next buttons */}
            <div className="flex items-center gap-3">
              {/* =====================================================
                  PREVIOUS BUTTON
              ====================================================== */}

              <button
                onClick={showPrevProject}
                disabled={offset <= 0}
                aria-label="Previous Projects"
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                  offset <= 0
                    ? "cursor-not-allowed border-gray-200 bg-white text-gray-300"
                    : "border-gray-200 bg-white text-[#14233B] shadow-sm hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <ChevronLeft size={19} />
              </button>

              {/* =====================================================
                  NEXT BUTTON
              ====================================================== */}

              <button
                onClick={showNextProject}
                disabled={offset >= maxOffset}
                aria-label="Next Projects"
                className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                  offset >= maxOffset
                    ? "cursor-not-allowed border-gray-200 bg-white text-gray-300"
                    : "border-gray-200 bg-white text-[#14233B] shadow-sm hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PROJECT SLIDER
        ====================================================== */}

        <div className="overflow-hidden">
          {/* =====================================================
              SLIDER TRACK
              The entire row moves horizontally using Framer Motion.
          ====================================================== */}

          <motion.div
            animate={{
              // Move the track horizontally according
              // to the current slider offset.
              x: `-${offset}%`,
            }}
            transition={{
              // Smooth slider animation
              duration: 0.65,

              // Custom easing for a premium movement effect
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-0 sm:gap-6 lg:gap-7"
          >
            {/* =====================================================
                PROJECT CARDS
            ====================================================== */}

            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                // Card starts slightly lower and transparent
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                // Card becomes visible when entering viewport
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                // Animation happens only once
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                // Stagger cards slightly for a smoother appearance
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                // Responsive card width:
                // Mobile  → 100%
                // Tablet  → 48%
                // Desktop → 25%
                className="relative shrink-0 w-full sm:w-[48%] lg:w-[25%]"
              >
                {/* =====================================================
                    PROPERTY LINK
                ====================================================== */}

                <Link to={`/project/${index}`} className="group block">
                  {/* =====================================================
                      PROPERTY CARD
                  ====================================================== */}

                  <div className="relative overflow-hidden rounded-[24px] bg-gray-200 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    {/* =================================================
                        PROPERTY IMAGE
                    ================================================== */}

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[440px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />

                    {/* =================================================
                        IMAGE OVERLAY
                        Dark gradient makes the text easier to read.
                    ================================================== */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/95 via-[#07111F]/20 to-transparent" />

                    {/* =================================================
                        TOP CARD CONTENT
                    ================================================== */}

                    <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                      {/* =================================================
                          PROPERTY STATUS
                      ================================================== */}

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#14233B] shadow-lg backdrop-blur-sm">
                        {/* Status indicator */}
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            project.status === "Featured"
                              ? "bg-blue-500"
                              : project.status === "New Listing"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                          }`}
                        />

                        {/* Status text */}
                        {project.status}
                      </span>

                      {/* =================================================
                          PROPERTY TYPE
                      ================================================== */}

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.13em] text-white backdrop-blur-md">
                        {/* Building icon */}
                        <Building2 size={11} />

                        {/* Property type text */}
                        {project.type}
                      </span>
                    </div>

                    {/* =================================================
                        HOVER ACTION BUTTON
                    ================================================== */}

                    <div className="absolute right-5 top-1/2 -translate-y-1/2">
                      <div className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-[#14233B] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    {/* =================================================
                        PROPERTY INFORMATION
                    ================================================== */}

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      {/* =================================================
                          LOCATION
                      ================================================== */}

                      <div className="mb-2 flex items-center gap-1.5 text-white/70">
                        <MapPin size={13} />

                        <span className="text-[10px] font-medium uppercase tracking-[0.13em]">
                          {project.location}
                        </span>
                      </div>

                      {/* =================================================
                          PROPERTY TITLE
                      ================================================== */}

                      <h3 className="text-[23px] font-medium tracking-[-0.025em] text-white">
                        {project.title}
                      </h3>

                      {/* Divider */}
                      <div className="my-4 h-px bg-white/15" />

                      {/* =================================================
                          PRICE + EXPLORE LINK
                      ================================================== */}

                      <div className="flex items-end justify-between">
                        {/* Starting price */}
                        <div>
                          <p className="mb-1 text-[9px] uppercase tracking-[0.18em] text-white/50">
                            Starting from
                          </p>

                          <p className="text-[18px] font-semibold tracking-tight text-white">
                            {project.price}
                          </p>
                        </div>

                        {/* Explore indicator */}
                        <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/70 transition-colors duration-300 group-hover:text-white">
                          Explore
                          <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* =====================================================
                    PROPERTY NUMBER
                ====================================================== */}

                <div className="mt-3 flex items-center justify-between px-1">
                  {/* Property index */}
                  <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Decorative line */}
                  <span className="mx-3 h-px flex-1 bg-gray-200" />

                  {/* Brand name */}
                  <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
                    UrbanNest
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <motion.div
          // CTA animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // Animate only once
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col gap-6 border-t border-gray-200 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* CTA text */}
          <div>
            <p className="text-sm font-medium text-[#14233B]">
              Your next address could be here.
            </p>

            <p className="mt-1 max-w-xl text-xs leading-5 text-gray-400">
              Browse our complete collection or get in touch with our team to
              find a property tailored to your needs.
            </p>
          </div>

          {/* CTA button */}
          <Link
            to="/projects"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#14233B] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-blue-600"
          >
            Explore All Properties
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
