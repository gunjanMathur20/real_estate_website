import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiMapPin,
  FiHome,
  FiMaximize2,
  FiDroplet,
  FiCheck,
  FiPhone,
  FiMail,
  FiHeart,
  FiShare2,
} from "react-icons/fi";

import { projectsData } from "../assets/assets";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectsData[id];

  /* =====================================================
     PROJECT NOT FOUND
  ====================================================== */

  if (!project) {
    return (
      <main className="min-h-screen bg-[#f7f9fc] px-6 py-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <FiHome size={25} />
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900">
            Property Not Found
          </h1>

          <p className="mt-3 leading-7 text-gray-500">
            The property you're looking for may have been moved, removed, or is
            currently unavailable.
          </p>

          <Link
            to="/projects"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <FiArrowLeft size={16} />
            Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  /* =====================================================
     FALLBACK PROPERTY DATA
  ====================================================== */

  const property = {
    ...project,
    description:
      project.description ||
      "A thoughtfully designed property combining contemporary architecture, refined interiors, and comfortable everyday living. Every detail has been considered to create a space that feels elegant, practical, and distinctly your own.",
    area: project.area || "2,500 sq ft",
    bedrooms: project.bedrooms || "4 Bedrooms",
    bathrooms: project.bathrooms || "3 Bathrooms",
    propertyType: project.propertyType || "Residential",
    year: project.year || "2025",
    status: project.status || "Available",
  };

  const features = [
    {
      icon: FiMaximize2,
      label: "Property Size",
      value: property.area,
    },
    {
      icon: FiHome,
      label: "Bedrooms",
      value: property.bedrooms,
    },
    {
      icon: FiDroplet,
      label: "Bathrooms",
      value: property.bathrooms,
    },
    {
      icon: FiHome,
      label: "Property Type",
      value: property.propertyType,
    },
  ];

  const amenities = [
    "Modern Architecture",
    "Premium Interiors",
    "Spacious Living Areas",
    "Natural Lighting",
    "Dedicated Parking",
    "Secure Community",
    "Landscaped Spaces",
    "Contemporary Kitchen",
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      {/* =====================================================
          PAGE CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-10 lg:px-16">
        {/* =====================================================
            BACK / BREADCRUMB
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7 flex items-center justify-between"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
          >
            <FiArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Properties
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label="Save property"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
            >
              <FiHeart size={17} />
            </button>

            <button
              type="button"
              aria-label="Share property"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
            >
              <FiShare2 size={17} />
            </button>
          </div>
        </motion.div>

        {/* =====================================================
            PROPERTY HERO
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
        >
          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            {/* IMAGE */}

            <div className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-[590px]">
              <img
                src={property.image}
                alt={property.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              {/* Status */}

              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-800 shadow-lg">
                  {property.status}
                </span>
              </div>

              {/* Image bottom content */}

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <div className="flex items-center gap-2 text-sm text-white/85">
                  <FiMapPin size={16} />
                  <span>{property.location}</span>
                </div>

                <h1 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {property.title}
                </h1>
              </div>
            </div>

            {/* PROPERTY SUMMARY */}

            <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Featured Property
                </p>

                <div className="mt-5">
                  <p className="text-sm text-gray-500">Starting from</p>

                  <p className="mt-1 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                    {property.price}
                  </p>
                </div>

                <div className="my-7 h-px bg-gray-100" />

                <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                  Location
                </p>

                <div className="mt-3 flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <FiMapPin size={16} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {property.location}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      A carefully selected location with convenient access to
                      everyday essentials and lifestyle destinations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hero CTA */}

              <div className="mt-10">
                <Link
                  to="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition duration-300 hover:bg-blue-700"
                >
                  Enquire About This Property
                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <p className="mt-3 text-center text-xs text-gray-400">
                  Speak with a property advisor for availability and pricing.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* =====================================================
            PROPERTY STATS
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-4"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`p-5 sm:p-6 ${
                  index !== features.length - 1
                    ? "border-b border-gray-100 sm:border-b-0 sm:border-r"
                    : ""
                } ${index === 1 ? "sm:border-r" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={16} />
                  </div>

                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    {item.label}
                  </span>
                </div>

                <p className="mt-4 text-base font-semibold text-gray-900">
                  {item.value}
                </p>
              </div>
            );
          })}
        </motion.section>

        {/* =====================================================
            MAIN DETAILS GRID
        ====================================================== */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* LEFT CONTENT */}

          <div>
            {/* Overview */}

            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Property Overview
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                  Designed for the way you want to live.
                </h2>
              </div>

              <p className="max-w-3xl text-[15px] leading-8 text-gray-600">
                {property.description}
              </p>

              <p className="mt-5 max-w-3xl text-[15px] leading-8 text-gray-600">
                With an emphasis on comfort, functionality, and timeless design,
                this property offers a refined environment for everyday living.
                From thoughtfully planned spaces to carefully considered
                details, every element is designed to create a balanced living
                experience.
              </p>
            </motion.section>

            {/* Highlights */}

            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-14 border-t border-gray-200 pt-12"
            >
              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Property Highlights
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950">
                  Everything you need, thoughtfully considered.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <FiCheck size={15} />
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Property Details */}

            <motion.section
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-14 border-t border-gray-200 pt-12"
            >
              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Property Details
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950">
                  At a glance
                </h2>
              </div>

              <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-2">
                <DetailRow label="Property Name" value={property.title} />
                <DetailRow label="Location" value={property.location} />
                <DetailRow
                  label="Property Type"
                  value={property.propertyType}
                />
                <DetailRow label="Year" value={property.year} />
                <DetailRow label="Area" value={property.area} />
                <DetailRow label="Status" value={property.status} />
              </div>
            </motion.section>
          </div>

          {/* =====================================================
              STICKY INQUIRY CARD
          ====================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Interested?
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-950">
                  Let's talk about this property.
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Get pricing, availability, floor plans, and more information
                  from our property team.
                </p>
              </div>

              <div className="p-6">
                <Link
                  to="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Request Information
                  <FiArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <a
                  href="tel:+18005550198"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-600"
                >
                  <FiPhone size={15} />
                  Call an Advisor
                </a>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Property Advisor
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-900">
                    UrbanNest Realty
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Our team is available to answer questions and arrange a
                    private property consultation.
                  </p>

                  <a
                    href="mailto:hello@urbannest.com"
                    className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <FiMail size={15} />
                    hello@urbannest.com
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl border border-blue-100 bg-blue-50"
        >
          <div className="flex flex-col gap-6 px-6 py-9 sm:px-9 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Your Next Move
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950">
                Ready to make this property yours?
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                Connect with UrbanNest and get the information you need to take
                the next step with confidence.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Contact Our Team
              <FiArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

/* =====================================================
   DETAIL ROW COMPONENT
====================================================== */

function DetailRow({ label, value }) {
  return (
    <div className="border-b border-gray-100 p-5 last:border-b-0 sm:nth-[odd]:border-r">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-semibold text-gray-800">{value}</p>
    </div>
  );
}
