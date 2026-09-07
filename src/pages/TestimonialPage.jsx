// React library for creating the component
import React from "react";

// Framer Motion is used for scroll-based entrance animations
// and hover animations on testimonial cards
import { motion } from "framer-motion";

// Import required assets and testimonial data
// assets contains images/icons such as the star icon
// testimonialsData contains all client testimonial information
import { assets, testimonialsData } from "../assets/assets";

// ================= TESTIMONIALS PAGE =================

export default function TestimonialsPage() {
  return (
    // Main Testimonials section
    <section
      id="Testimonials"
      className="
        w-full
        overflow-hidden
        bg-white
        px-5
        pt-24
        pb-20
        sm:px-8
        sm:pt-28
        lg:px-16
        lg:pt-32
      "
    >
      {/* =====================================================
          SECTION HEADER
          Contains the label, heading and description
      ====================================================== */}

      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        {/* Small section label with decorative lines */}

        <motion.div
          // Initial animation state
          initial={{ opacity: 0, y: 15 }}
          // Animation state when the element enters the viewport
          whileInView={{ opacity: 1, y: 0 }}
          // Animation runs only once
          viewport={{ once: true, amount: 0.3 }}
          // Animation duration
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          {/* Left decorative line */}
          <span className="h-px w-8 bg-blue-500 sm:w-10" />

          {/* Section label */}
          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-600
              sm:text-xs
            "
          >
            Client Stories
          </span>

          {/* Right decorative line */}
          <span className="h-px w-8 bg-blue-500 sm:w-10" />
        </motion.div>

        {/* ================= MAIN HEADING ================= */}

        <motion.h2
          // Heading starts slightly lower and transparent
          initial={{ opacity: 0, y: 25 }}
          // Heading moves into its final position
          whileInView={{ opacity: 1, y: 0 }}
          // Animation happens only once
          viewport={{ once: true, amount: 0.3 }}
          // Heading animation timing
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            text-3xl
            font-semibold
            leading-[1.15]
            tracking-tight
            text-gray-900
            sm:text-4xl
            md:text-5xl
          "
        >
          {/* First line of heading */}
          Trusted by People.
          <br />
          {/* Highlighted second line */}
          <span className="text-blue-600">Loved for the Experience.</span>
        </motion.h2>

        {/* ================= DESCRIPTION ================= */}

        <motion.p
          // Initial animation
          initial={{ opacity: 0, y: 20 }}
          // Final animation state
          whileInView={{ opacity: 1, y: 0 }}
          // Trigger animation when the element enters viewport
          viewport={{ once: true, amount: 0.3 }}
          // Slight delay after the heading animation
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-gray-500
            sm:text-base
          "
        >
          Buying a property is more than a transaction. It's about finding a
          place that feels right. Here's what our clients have to say about
          their experience with UrbanNest.
        </motion.p>
      </div>

      {/* =====================================================
          MOBILE / TABLET SWIPE AREA
          On smaller screens testimonials behave like a
          horizontal swipeable carousel.
      ====================================================== */}

      <div className="mx-auto max-w-7xl">
        {/* ================= SLIDER TOP INFORMATION ================= */}

        <div className="mb-5 flex items-center justify-between">
          {/* Small label above testimonial cards */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Client Reviews
            </p>
          </div>

          {/* Swipe indicator
              Hidden on large screens because cards become a grid */}

          <div className="flex items-center gap-2 text-xs text-gray-400 lg:hidden">
            {/* Instruction for mobile/tablet users */}
            <span>Swipe</span>

            {/* Arrow indicating horizontal movement */}
            <span className="text-base text-blue-500">→</span>
          </div>
        </div>

        {/* =====================================================
            TESTIMONIAL CARDS CONTAINER
            - Mobile: one card at a time
            - Tablet: two cards visible
            - Desktop: three-column grid
        ====================================================== */}

        <div
          className="
            flex
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            pb-5
            sm:gap-6
            lg:grid
            lg:grid-cols-3
            lg:gap-7
            lg:overflow-visible
            lg:pb-0
          "
          // Hide scrollbar while keeping horizontal scrolling
          // enabled on mobile and tablet
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Loop through every testimonial from testimonialsData */}

          {testimonialsData.map((testimonial, idx) => (
            <motion.article
              // Unique key for each testimonial card
              key={idx}
              // Initial card animation
              initial={{
                opacity: 0,
                y: 30,
              }}
              // Final card animation when visible
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              // Trigger animation only once
              viewport={{
                once: true,
                amount: 0.15,
              }}
              // Each card gets a slightly different delay
              // to create a staggered entrance effect
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: "easeOut",
              }}
              // Card moves slightly upward on hover
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                min-w-full
                snap-center
                overflow-hidden
                rounded-[26px]
                border
                border-gray-100
                bg-white
                p-6
                shadow-[0_10px_35px_rgba(15,23,42,0.06)]
                transition-shadow
                duration-300
                hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
                sm:min-w-[calc(50%-12px)]
                sm:p-7
                lg:min-w-0
                lg:p-8
              "
            >
              {/* =================================================
                  BLUE TOP ACCENT
                  Appears when the testimonial card is hovered
              ================================================== */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-full
                  bg-blue-500
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* =================================================
                  QUOTE DECORATION
                  Large decorative quotation mark in background
              ================================================== */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-6
                  top-3
                  select-none
                  font-serif
                  text-[80px]
                  leading-none
                  text-blue-50
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                “
              </div>

              {/* =================================================
                  CLIENT PROFILE
                  Displays client image, name and designation
              ================================================== */}

              <div className="relative z-10 flex items-center gap-4">
                {/* Client profile image container */}
                <div
                  className="
                    h-[64px]
                    w-[64px]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-4
                    border-blue-50
                    bg-gray-100
                  "
                >
                  {/* Client profile image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Client information */}
                <div className="min-w-0">
                  {/* Client name */}
                  <h3
                    className="
                      truncate
                      text-base
                      font-semibold
                      text-gray-900
                      sm:text-lg
                    "
                  >
                    {testimonial.name}
                  </h3>

                  {/* Client title/designation */}
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* =================================================
                  RATING
                  Displays five stars based on testimonial.rating
              ================================================== */}

              <div className="mt-6 flex items-center gap-3">
                {/* Star rating container */}
                <div className="flex gap-1">
                  {/* Create exactly five stars */}
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <img
                      // Unique key for each star
                      key={starIndex}
                      // Star icon from assets
                      src={assets.star_icon}
                      // Accessibility text
                      alt="rating star"
                      className={`
                        h-4
                        w-4
                        ${
                          // Fully visible stars are based on rating
                          starIndex < testimonial.rating
                            ? "opacity-100"
                            : // Remaining stars appear faded
                              "opacity-20"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* Numeric rating badge */}
                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    text-blue-600
                  "
                >
                  {testimonial.rating}.0
                </span>
              </div>

              {/* =================================================
                  DIVIDER
              ================================================== */}

              <div className="my-6 h-px w-full bg-gray-100" />

              {/* =================================================
                  CLIENT REVIEW
              ================================================== */}

              <p
                className="
                  min-h-[145px]
                  text-sm
                  leading-7
                  text-gray-600
                  sm:text-[15px]
                "
              >
                {/* Display testimonial text inside quotation marks */}“
                {testimonial.text}”
              </p>

              {/* =================================================
                  VERIFIED CLIENT
                  Bottom section showing verification status
              ================================================== */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  justify-between
                  border-t
                  border-gray-100
                  pt-5
                "
              >
                {/* Verified client label */}
                <div className="flex items-center gap-2">
                  {/* Verification check icon */}
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-500
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    ✓
                  </span>

                  {/* Verification text */}
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-gray-400
                    "
                  >
                    Verified Client
                  </span>
                </div>

                {/* Brand name */}
                <span className="text-xs font-medium text-blue-500">
                  UrbanNest
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* =====================================================
          TRUST / RATING STRIP
          Displays the overall client rating and trust message
      ====================================================== */}

      <motion.div
        // Initial animation state
        initial={{
          opacity: 0,
          y: 25,
        }}
        // Final animation state
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        // Animation triggers when the strip enters the viewport
        viewport={{
          once: true,
          amount: 0.3,
        }}
        // Animation timing
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="
          mx-auto
          mt-10
          flex
          max-w-4xl
          flex-col
          items-center
          justify-between
          gap-5
          rounded-2xl
          border
          border-blue-100
          bg-gradient-to-r
          from-blue-50
          to-white
          px-6
          py-6
          sm:flex-row
          sm:px-8
        "
      >
        {/* ================= TRUST MESSAGE ================= */}

        <div className="text-center sm:text-left">
          {/* Main trust message */}
          <p className="text-base font-semibold text-gray-900 sm:text-lg">
            Your next property journey starts here.
          </p>

          {/* Supporting trust message */}
          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Trusted guidance. Better spaces. Confident decisions.
          </p>
        </div>

        {/* ================= OVERALL RATING ================= */}

        <div className="flex items-center gap-3">
          {/* Overall rating number */}
          <span className="text-3xl font-semibold text-blue-600">4.8</span>

          {/* Rating stars and description */}
          <div>
            {/* Display five rating stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  // Unique key for each star
                  key={index}
                  // Star icon from assets
                  src={assets.star_icon}
                  // Accessibility text
                  alt="star"
                  // Size of each star
                  className="h-3.5 w-3.5"
                />
              ))}
            </div>

            {/* Rating description */}
            <p className="mt-1 text-[10px] text-gray-400">
              Average client rating
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
