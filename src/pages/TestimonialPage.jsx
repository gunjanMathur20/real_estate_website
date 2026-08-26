import React from "react";
import { motion } from "framer-motion";
import { assets, testimonialsData } from "../assets/assets";

export default function TestimonialsPage() {
  return (
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
      ====================================================== */}

      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        {/* Small Label */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-blue-500 sm:w-10" />

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

          <span className="h-px w-8 bg-blue-500 sm:w-10" />
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
          Trusted by People.
          <br />
          <span className="text-blue-600">Loved for the Experience.</span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
      ====================================================== */}

      <div className="mx-auto max-w-7xl">
        {/* Slider top information */}

        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Client Reviews
            </p>
          </div>

          {/* Mobile / Tablet Swipe Indicator */}

          <div className="flex items-center gap-2 text-xs text-gray-400 lg:hidden">
            <span>Swipe</span>

            <span className="text-base text-blue-500">→</span>
          </div>
        </div>

        {/* =====================================================
            CARDS
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
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonialsData.map((testimonial, idx) => (
            <motion.article
              key={idx}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: "easeOut",
              }}
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
                  PROFILE
              ================================================== */}

              <div className="relative z-10 flex items-center gap-4">
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

                <div className="min-w-0">
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

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* =================================================
                  RATING
              ================================================== */}

              <div className="mt-6 flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <img
                      key={starIndex}
                      src={assets.star_icon}
                      alt="rating star"
                      className={`
                        h-4
                        w-4
                        ${
                          starIndex < testimonial.rating
                            ? "opacity-100"
                            : "opacity-20"
                        }
                      `}
                    />
                  ))}
                </div>

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
                  REVIEW
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
                “{testimonial.text}”
              </p>

              {/* =================================================
                  VERIFIED CLIENT
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
                <div className="flex items-center gap-2">
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
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
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
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold text-gray-900 sm:text-lg">
            Your next property journey starts here.
          </p>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Trusted guidance. Better spaces. Confident decisions.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-semibold text-blue-600">4.8</span>

          <div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="star"
                  className="h-3.5 w-3.5"
                />
              ))}
            </div>

            <p className="mt-1 text-[10px] text-gray-400">
              Average client rating
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
