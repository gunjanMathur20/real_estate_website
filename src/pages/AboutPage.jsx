import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, MapPin, ShieldCheck } from "lucide-react";

import { assets } from "../assets/assets";

export default function AboutPage() {
  const stats = [
    {
      number: "10+",
      label: "Years of experience",
    },
    {
      number: "12+",
      label: "Projects completed",
    },
    {
      number: "20+",
      label: "Mn. sq. ft. delivered",
    },
    {
      number: "27+",
      label: "Ongoing projects",
    },
  ];

  const values = [
    {
      icon: Building2,
      title: "Thoughtful architecture",
      text: "Spaces designed around contemporary lifestyles, comfort and timeless aesthetics.",
    },
    {
      icon: MapPin,
      title: "Prime locations",
      text: "Well-connected addresses selected for convenience, growth and long-term value.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted quality",
      text: "A transparent approach backed by quality construction and attention to detail.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-slate-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            INTRO
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-12 bg-blue-600" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-600">
              About UrbanNest
            </span>
          </div>

          {/* Main heading */}

          <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.035em] text-[#17212B] sm:text-5xl lg:text-[64px]">
            We create places
            <br />
            <span className="font-semibold text-blue-600">
              people call home.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-[15px] leading-7 text-[#687585] sm:text-base">
            UrbanNest brings together thoughtful architecture, considered
            locations and modern living to create spaces that feel as good as
            they look.
          </p>
        </motion.div>

        {/* =====================================================
            STORY AREA
        ===================================================== */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* =================================================
              IMAGE COMPOSITION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative min-h-[560px]"
          >
            {/* Large image */}

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35 }}
              className="absolute left-0 top-0 w-[78%] overflow-hidden rounded-[4px] shadow-[0_25px_70px_rgba(15,23,42,0.16)]"
            >
              <img
                src={assets.brand_img}
                alt="UrbanNest residential development"
                className="h-[455px] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/45 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
                  UrbanNest
                </p>

                <p className="mt-2 text-xl font-medium tracking-tight text-white">
                  Designed for modern living
                </p>
              </div>
            </motion.div>

            {/* Secondary image */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              whileHover={{ y: -6 }}
              className="absolute bottom-0 right-0 z-20 w-[47%] overflow-hidden border-[7px] border-[#F7F9FC] shadow-[0_20px_50px_rgba(15,23,42,0.18)]"
            >
              <img
                src={assets.project_img_1}
                alt="UrbanNest property"
                className="h-[225px] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Small image */}

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="absolute right-[3%] top-[7%] z-30 w-[29%] overflow-hidden border-[6px] border-[#F7F9FC] shadow-[0_15px_40px_rgba(15,23,42,0.18)]"
            >
              <img
                src={assets.project_img_2}
                alt="UrbanNest architecture"
                className="h-[145px] w-full object-cover"
              />
            </motion.div>

            {/* Experience badge */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="absolute bottom-[175px] left-[55%] z-40 flex h-[94px] w-[94px] -translate-x-1/2 flex-col items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_12px_35px_rgba(37,99,235,0.3)]"
            >
              <span className="text-[25px] font-semibold tracking-tight">
                10+
              </span>

              <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.18em] text-blue-100">
                Years
              </span>
            </motion.div>

            {/* Decorative line */}

            <div className="absolute bottom-8 left-8 h-[405px] w-[72%] border border-blue-200/70" />
          </motion.div>

          {/* =================================================
              STORY CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
              Our philosophy
            </p>

            <h3 className="mt-5 max-w-xl text-3xl font-medium leading-[1.15] tracking-[-0.025em] text-[#17212B] sm:text-[42px]">
              More than property.
              <br />
              <span className="font-semibold text-blue-600">
                A place to belong.
              </span>
            </h3>

            <div className="mt-7 h-[1px] w-14 bg-blue-600" />

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#687585]">
              At UrbanNest, we believe exceptional real estate begins with
              understanding how people actually live. Every project is shaped
              around comfort, functionality and a strong sense of place.
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#8A95A3]">
              From the first concept to the final handover, we focus on creating
              spaces that are thoughtfully designed, responsibly developed and
              built to stand the test of time.
            </p>

            {/* =================================================
                HIGHLIGHTS
            ================================================= */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                "Customer-first approach",
                "Quality-driven development",
                "Transparent communication",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  </span>

                  <span className="text-sm font-medium text-[#344150]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}

            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-10 flex items-center gap-3 border-b border-[#17212B] pb-2 text-sm font-semibold text-[#17212B] transition-colors duration-300 hover:border-blue-600 hover:text-blue-600"
            >
              <span>Discover our story</span>

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.button>
          </motion.div>
        </div>

        {/* =====================================================
            STATS
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-24 border-y border-[#E5EAF0]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className={`px-5 py-9 sm:px-8 ${
                  index !== 0 ? "border-l border-[#E5EAF0]" : ""
                }`}
              >
                <p className="text-4xl font-semibold tracking-[-0.03em] text-[#17212B] sm:text-5xl">
                  {stat.number}
                </p>

                <div className="mt-3 h-[2px] w-7 bg-blue-600" />

                <p className="mt-3 max-w-[150px] text-[11px] font-medium uppercase leading-5 tracking-[0.12em] text-[#8A95A3]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            VALUES
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Heading */}

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
                What defines us
              </p>

              <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.025em] text-[#17212B] sm:text-4xl">
                Built with
                <br />
                <span className="font-semibold text-blue-600">purpose.</span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#7C8795]">
                The details may change from project to project, but our
                commitment to better living remains the same.
              </p>
            </div>

            {/* Value cards */}

            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
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
                    }}
                    transition={{
                      delay: index * 0.12,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group border border-[#E5EAF0] bg-white p-6 transition duration-300 hover:border-blue-100 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <h4 className="mt-7 text-base font-semibold leading-6 text-[#17212B]">
                      {value.title}
                    </h4>

                    <p className="mt-3 text-[13px] leading-6 text-[#8993A0]">
                      {value.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
