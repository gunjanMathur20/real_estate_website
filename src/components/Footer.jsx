import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  // Get the current year dynamically for the copyright text.
  const currentYear = new Date().getFullYear();

  // Social media links displayed in the footer.
  // The href values can be replaced with actual social media URLs later.
  const socialLinks = [
    {
      label: "Instagram",
      icon: FiInstagram,
      href: "#",
    },
    {
      label: "LinkedIn",
      icon: FiLinkedin,
      href: "#",
    },
    {
      label: "Facebook",
      icon: FiFacebook,
      href: "#",
    },
    {
      label: "Twitter",
      icon: FiTwitter,
      href: "#",
    },
  ];

  // Main navigation links used in the "Explore" section.
  const exploreLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Properties", path: "/projects" },
    { label: "Client Stories", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  // Services offered by UrbanNest Realty.
  const services = [
    "Buy a Property",
    "Rent a Property",
    "Sell Your Property",
    "Property Investment",
    "Property Consultation",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-[#f7f9fc]">
      {/* =====================================================
          SUBTLE BACKGROUND ACCENT
          Decorative circles that add depth to the footer.
      ====================================================== */}

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-100/50" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-50/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        {/* =====================================================
            TOP BRAND STATEMENT
            Introduces the brand and its core message.
        ====================================================== */}

        <div className="mb-14 flex flex-col gap-6 border-b border-gray-200 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                UrbanNest Realty
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-[2.75rem]">
              Spaces that feel right.
              <span className="block text-blue-600">
                Decisions that feel confident.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500 lg:text-right">
            Helping people discover thoughtfully selected properties with
            trusted guidance, transparent communication, and a simpler
            experience from search to settlement.
          </p>
        </div>

        {/* =====================================================
            MAIN FOOTER GRID
            Contains brand information, navigation, services,
            and contact details.
        ====================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.45fr_0.75fr_0.85fr_1.15fr]">
          {/* ================= BRAND ================= */}

          <div className="max-w-sm">
            {/* Brand logo/name linking back to the homepage. */}
            <Link
              to="/"
              className="inline-flex items-center text-2xl font-semibold tracking-tight text-gray-950"
            >
              Urban<span className="text-blue-600">Nest</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Your trusted partner for finding spaces that match your lifestyle,
              goals, and vision for the future.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Whether you're buying your first home, renting a new space, or
              exploring an investment opportunity, we're here to help.
            </p>

            {/* Social media links. */}
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900">
              Explore
            </h3>

            {/* Render navigation links from the exploreLinks array. */}
            <ul className="mt-6 space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
                  >
                    {item.label}

                    <FiArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900">
              Services
            </h3>

            {/* Display the available real estate services. */}
            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="cursor-default text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900">
              Get In Touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Have a property in mind? Let's talk about what you're looking for.
            </p>

            {/* Newsletter subscription form. */}
            <form className="mt-5 flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-950 text-white transition duration-300 hover:bg-blue-600"
              >
                <FiArrowUpRight size={17} />
              </button>
            </form>

            {/* Contact Details */}
            <div className="mt-7 space-y-4">
              {/* Email contact information. */}
              <a
                href="mailto:hello@urbannest.com"
                className="group flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-blue-600"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <FiMail size={14} />
                </span>
                hello@urbannest.com
              </a>

              {/* Phone contact information. */}
              <a
                href="tel:+18005550198"
                className="group flex items-center gap-3 text-sm text-gray-500 transition-colors hover:text-blue-600"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <FiPhone size={14} />
                </span>
                +1 (800) 555-0198
              </a>

              {/* Physical office address. */}
              <div className="flex items-start gap-3 text-sm leading-6 text-gray-500">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm">
                  <FiMapPin size={14} />
                </span>

                <span>
                  1200 Wilshire Boulevard
                  <br />
                  Beverly Hills, California
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA SECTION
            Encourages visitors to explore available properties.
        ====================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-2xl bg-gray-950 px-6 py-8 sm:px-8 lg:px-10">
          {/* Decorative accent on the right side of the CTA. */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-600/10" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                Find Your Next Space
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Ready to find a place you'll love?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                Explore our curated properties and take the next step toward
                your ideal space.
              </p>
            </div>

            {/* CTA button linking to the properties/projects page. */}
            <Link
              to="/projects"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500"
            >
              Explore Properties
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
            Contains copyright information and secondary links.
        ====================================================== */}

        <div className="mt-8 flex flex-col gap-5 border-t border-gray-200 pt-7 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} UrbanNest Realty. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            {/* Placeholder links for legal pages. */}
            <Link to="/" className="transition-colors hover:text-gray-700">
              Privacy Policy
            </Link>

            <Link to="/" className="transition-colors hover:text-gray-700">
              Terms of Use
            </Link>

            <span className="hidden h-3 w-px bg-gray-300 sm:block" />

            <span>
              Designed & Developed by{" "}
              <span className="font-medium text-gray-600">Gunjan Mathur</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
