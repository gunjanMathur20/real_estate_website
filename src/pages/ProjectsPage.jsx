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
  const [offset, setOffset] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // ================= RESPONSIVE SLIDER =================

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 640) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  // Reset position when screen size changes
  useEffect(() => {
    setOffset(0);
  }, [cardsToShow]);

  // ================= SLIDER LOGIC =================

  const slidePercentage = 100 / cardsToShow;

  const maxOffset = Math.max(
    (projectsData.length - cardsToShow) * slidePercentage,
    0,
  );

  const showNextProject = () => {
    setOffset((prev) => (prev >= maxOffset ? prev : prev + slidePercentage));
  };

  const showPrevProject = () => {
    setOffset((prev) => (prev <= 0 ? prev : prev - slidePercentage));
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      {/* ================= BACKGROUND DETAILS ================= */}

      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Heading */}

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-blue-500" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">
                Selected Properties
              </span>
            </div>

            <h2 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#14233B] sm:text-5xl lg:text-[64px]">
              Spaces designed
              <br />
              <span className="font-normal text-gray-400">
                for the way you live.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-gray-500 sm:text-base">
              Discover thoughtfully designed residences where contemporary
              architecture meets everyday comfort. Explore our collection of
              properties selected for quality, character, and long-term value.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex items-end justify-between gap-8">
            <div className="hidden lg:block">
              <p className="text-3xl font-semibold tracking-tight text-[#14233B]">
                {String(projectsData.length).padStart(2, "0")}
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Featured Properties
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Previous */}

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

              {/* Next */}

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

        {/* ================= PROJECT SLIDER ================= */}

        <div className="overflow-hidden">
          <motion.div
            animate={{
              x: `-${offset}%`,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex gap-0 sm:gap-6 lg:gap-7"
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.07,
                }}
                className="relative shrink-0 w-full sm:w-[48%] lg:w-[25%]"
              >
                <Link to={`/project/${index}`} className="group block">
                  {/* ================= CARD ================= */}

                  <div className="relative overflow-hidden rounded-[24px] bg-gray-200 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    {/* Image */}

                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-[440px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F]/95 via-[#07111F]/20 to-transparent" />

                    {/* ================= TOP CONTENT ================= */}

                    <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
                      {/* Status */}

                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/95 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#14233B] shadow-lg backdrop-blur-sm">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            project.status === "Featured"
                              ? "bg-blue-500"
                              : project.status === "New Listing"
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                          }`}
                        />

                        {project.status}
                      </span>

                      {/* Property Type */}

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.13em] text-white backdrop-blur-md">
                        <Building2 size={11} />

                        {project.type}
                      </span>
                    </div>

                    {/* ================= HOVER ACTION ================= */}

                    <div className="absolute right-5 top-1/2 -translate-y-1/2">
                      <div className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-[#14233B] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    {/* ================= PROPERTY DETAILS ================= */}

                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      {/* Location */}

                      <div className="mb-2 flex items-center gap-1.5 text-white/70">
                        <MapPin size={13} />

                        <span className="text-[10px] font-medium uppercase tracking-[0.13em]">
                          {project.location}
                        </span>
                      </div>

                      {/* Title */}

                      <h3 className="text-[23px] font-medium tracking-[-0.025em] text-white">
                        {project.title}
                      </h3>

                      {/* Divider */}

                      <div className="my-4 h-px bg-white/15" />

                      {/* Price + View */}

                      <div className="flex items-end justify-between">
                        <div>
                          <p className="mb-1 text-[9px] uppercase tracking-[0.18em] text-white/50">
                            Starting from
                          </p>

                          <p className="text-[18px] font-semibold tracking-tight text-white">
                            {project.price}
                          </p>
                        </div>

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

                {/* Property number */}

                <div className="mt-3 flex items-center justify-between px-1">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="mx-3 h-px flex-1 bg-gray-200" />

                  <span className="text-[10px] uppercase tracking-[0.15em] text-gray-400">
                    UrbanNest
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col gap-6 border-t border-gray-200 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-[#14233B]">
              Your next address could be here.
            </p>

            <p className="mt-1 max-w-xl text-xs leading-5 text-gray-400">
              Browse our complete collection or get in touch with our team to
              find a property tailored to your needs.
            </p>
          </div>

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
